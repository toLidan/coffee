$(function(){
	var timer1 = setInterval(move,4000);
	var num = 1;
	function move(){
		if(num>=4){
			$('ul.img').css('left','0px');
			num = 1;
		}
		if(num == 3){
			$('ul.dots li').eq(0).css('background','red').siblings().css('background','white')
		}
		var obj = {left:-1349*num+'px'}
		$('ul.img').animate(obj,1000);
		num++;
		$('ul.dots li').eq(num-1).css('background','red').siblings().css('background','white')
	}

	$('ul.dots li').mouseover(function(){
		clearInterval(timer1);
		$(this).css('background','red').siblings().css('background','white');
		num = $(this).index();
		$('ul.img').animate({'left':-1349*num+'px',});
	})
	$('ul.dots li').mouseout(function(){
		timer1 = setInterval(move,4000);
	})

	$('ul.img li a img').mouseover(function(){
		clearInterval(timer1);
	})
	$('ul.img li a img').mouseout(function(){
		timer1 = setInterval(move,4000);
	})
})

// $(function(){
// 	var timer = setInterval(run,4000);
// 	var index = 1;
// 	function run(){
// 		if(index>=4){
// 			$('.wraperAll').css('left','0px');
// 			index = 1;
// 		}
// 		if(index == 3){
// 			$('ul.two li').eq(0).addClass('active').siblings().removeClass('active');
// 		}
// 		var obj1 = {left:-1170*index+'px'}
// 		$('.wraperAll').animate(obj1,1000);
// 		index++;
// 		$('ul.two li').eq(index-1).addClass('active').siblings().removeClass('active');
// 	}
// 	$('ul.two li').mouseover(function(){
// 		clearInterval(timer);
// 		$(this).addClass('active').siblings().removeClass('active');
// 		index = $(this).index();
// 		$('.wraperAll').animate({'left':-1170*index+'px',});
// 	})
// 	$('ul.two li').mouseout(function(){
// 		timer = setInterval(run,4000);
// 	})

// 	$('.wraperAll .wraper').mouseover(function(){
// 		clearInterval(timer);
// 	})
// 	$('.wraperAll .wraper').mouseout(function(){
// 		timer = setInterval(run,2000);
// 	})
// })