"use strict";

/* ==============================================
	Preload
=============================================== */
$(window).load(function () {
  // makes sure the whole site is loaded
  $("#status").fadeOut();
  $("#preloader").fadeOut();
  $("body").css({ overflow: "visible" });
});
/* ==============================================
	Sticky nav
=============================================== */
$(window).scroll(function () {
  if ($(this).scrollTop() > 1) {
    $("header").addClass("sticky");
  } else {
    $("header").removeClass("sticky");
  }
});
/* ==============================================
	Menu
=============================================== */
$("a.open_close").on("click", function () {
  $(".main-menu").toggleClass("show");
  $(".layer").toggleClass("layer-is-visible");
});

$("a.close_option").on("click", function () {
  console.log('Close ! ');
  $(".main-menu").removeClass("show");
  $(".layer").removeClass("layer-is-visible");
  $(".cmn-toggle-switch").removeClass("active");
});

$("a.show-submenu").on("click", function () {
  $(this).next().toggleClass("show_normal");
});

$("a.show-submenu-mega").on("click", function () {
  $(this).next().toggleClass("show_mega");
});

if ($(window).width() <= 480) {  
  $("a.open_close").on("click", function () {
    $(".cmn-toggle-switch").removeClass("active");
  });
}

$(function () {
  /* Hamburger icon*/
  var toggles = document.querySelectorAll(".cmn-toggle-switch");
  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  }
  function toggleHandler(toggle) {    
    toggle.addEventListener("click", function (e) {      
      e.preventDefault();
      this.classList.contains("active") === true
        ? this.classList.remove("active")
        : this.classList.add("active");
    });
  }
  /* Scroll to top*/
  $(window).scroll(function () {
    if ($(this).scrollTop() != 0) {
      $("#toTop").fadeIn();
    } else {
      $("#toTop").fadeOut();
    }
  });
  $("#toTop").on("click", function () {
    $("body,html").animate({ scrollTop: 0 }, 500);
  });
});
