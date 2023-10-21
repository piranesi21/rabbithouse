(function($) {

	// Image Loading

	window.onload = function(){
		$("loading").fadeOut("slow");
		$('.loading').fadeOut("slow");
	};

	// Header Revival

	if (matchMedia("screen and (max-width: 799px)").matches) {

		$(window).scroll(function() {
			var scroll = $(window).scrollTop(),
				wh = $(window).height();

			if (scroll >= (wh - 100)) {
				$('#milkyway-logo').addClass('outbanner-logo');
				$('header').addClass('out-header');

			} else {
				$('#milkyway-logo').removeClass('outbanner-logo');
				$('header').removeClass('out-header');
			}});

	} else {

		$(window).scroll(function() {
			var scroll = $(window).scrollTop(),
				wh = $(window).height();

			if (scroll >= (wh - 100)) {
				$('header').addClass('outbanner-header');
				$('#milkyway-logo').addClass('outbanner-logo');
				$('.hypereffect').addClass('outbanner-effect');
			} else {
				$('header').removeClass('outbanner-header');
				$('#milkyway-logo').removeClass('outbanner-logo');
				$('.hypereffect').removeClass('outbanner-effect');
		}})
	};

	$(window).resize(function () {
		if (matchMedia("screen and (max-width: 799px)").matches) {

			$(window).scroll(function() {
				var scroll = $(window).scrollTop(),
					wh = $(window).height();

				if (scroll >= (wh - 100)) {
					$('#milkyway-logo').addClass('outbanner-logo');
					$('header').removeClass('outbanner-header');

				} else {
					$('#milkyway-logo').removeClass('outbanner-logo');
					$('header').removeClass('outbanner-header');
				}});

		} else {

			$(window).scroll(function() {
				var scroll = $(window).scrollTop(),
					wh = $(window).height();

				if (scroll >= (wh - 100)) {
					$('header').addClass('outbanner-header');
					$('#milkyway-logo').addClass('outbanner-logo');
					$('.hypereffect').addClass('outbanner-effect');
				} else {
					$('header').removeClass('outbanner-header');
					$('#milkyway-logo').removeClass('outbanner-logo');
					$('.hypereffect').removeClass('outbanner-effect');
			}})
		};
	});

	// hreflinks Checks

	$('a.sitebutton[href^="#"]').addClass("emptylink");

})(jQuery);

	// Mobile Header

	if (matchMedia("screen and (max-width: 799px)").matches) {
		function nav_click() {
			$('header ul').toggleClass('click');
			$('input').toggleClass('clickbutton');
		};
	};

	$(window).resize(function () {
		if (matchMedia("screen and (max-width: 799px)").matches) {
			function nav_click() {
				$('header ul').toggleClass('click');
				$('input').toggleClass('clickbutton');
			};}
	});