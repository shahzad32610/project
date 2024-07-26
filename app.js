$(document).ready(function () {
    $(window).on('scroll', function () {
      if ($(window).scrollTop()) {
        $("nav").addClass('bgc');
      } else {
        $("nav").removeClass('bgc');
      }
    });
  });

  // sroll AOS
  AOS.init();

  AOS.init({
      disable: window.innerWidth < 992
  });

// loader
  let preloader = document.getElementById("preloader");

  window.addEventListener("load",function(){
    preloader.style.display = "none"
  })