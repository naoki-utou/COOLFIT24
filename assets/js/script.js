'use strict'

$(function() {

	// ドロワーメニュー
	$('.header_menu').on('click', function() {
		$('.header_toggle').toggleClass('open');
		$('.header_nav_list').toggleClass('open');
		$('.header_nav_bg').toggleClass('open');
	});

	$('.header_nav_bg').on('click', function() {
		$('.header_toggle').toggleClass('open');
		$('.header_nav_list').toggleClass('open');
		$('.header_nav_bg').toggleClass('open');
	})


	// スムーズスクロール
	$('.header_nav_link').on('click', function() {
		var $id = $(this).attr('href');
	    var $position = $($id).offset().top - 100;

	    $('html, body').animate({
	      'scrollTop' :$position
	    }, 1000);

	    $('.header_toggle').toggleClass('open');
		$('.header_nav_list').toggleClass('open');
		$('.header_nav_bg').toggleClass('open');

		return false;
	});


	// アコーディオンメニュー
	$('.faq_item_ttl').on('click', function() {
    	$(this).next().slideToggle(240);
    	$(this).toggleClass('open');
  	});

});
