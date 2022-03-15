"use strict";

var $window = $(window);
var $body = $("body");
var $root = $(":root"); // 画面サイズ

var winWidth = window.innerWidth;
var winHeight = window.innerHeight;
var winAspect = winHeight / winWidth;
var pcFlg = false;

if (winWidth >= 850) {
  pcFlg = true;
}

function updateDOM() {
  // 画面サイズ
  winWidth = window.innerWidth;
  winHeight = window.innerHeight;
  winAspect = winHeight / winWidth;

  if (winWidth >= 850) {
    pcFlg = true;
  } else {
    pcFlg = false;
  }
}

$window.on("load", function () {
  updateDOM();
  $body.addClass("is-load");
});
$(window).on('resize', function () {
  updateDOM();
});