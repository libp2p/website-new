require=function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a="function"==typeof require&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n||e)},l,l.exports,e,t,n,r)}return n[o].exports}for(var i="function"==typeof require&&require,o=0;o<r.length;o++)s(r[o]);return s}({2:[function(require,module,exports){var initPage=require("./lib/init-page"),initLogo=require("./lib/logo");initPage(),initLogo()},{"./lib/init-page":4,"./lib/logo":5}],5:[function(require,module,exports){var $=require("jquery");module.exports=function(){$(window).scroll(function(e){var $logo=$("header .logo");$(window).outerWidth()>767&&!$logo.hasClass("static")&&($(window).scrollTop()>300?$logo.addClass("show"):$logo.removeClass("show"))})}},{jquery:10}]},{},[2]);