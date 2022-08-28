$(function () {

  //ページ内スクロール
  var navHeight = $(".header").outerHeight();

  $('a[href^="#"]').on("click", function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - navHeight;
    $("html, body").animate({ scrollTop: position, }, 300, "swing");
    return false;
  });

  // animation呼び出し
  if ($(".js-scroll-trigger").length) {
    scrollAnimation();
  }

  // animation関数
  function scrollAnimation() {
    $(window).scroll(function () {
        $(".js-scroll-trigger").each(function () {
            let position = $(this).offset().top,
                scroll = $(window).scrollTop(),
                windowHeight = $(window).height();

            if (scroll > position - windowHeight + 200) {
                $(this).addClass("is-active");
            }
        });
    });
  }
  $(window).trigger('scroll');

});
