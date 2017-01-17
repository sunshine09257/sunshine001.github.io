/* 设置适口 */
!function() {
	var scale = 1;
	var ratio = window.devicePixelRatio;
	scale = scale / window.devicePixelRatio;
	var meta = document.createElement("meta");
	meta.setAttribute("name","viewport");
	meta.setAttribute("content","width=device-width,initial-scale = "+scale+",minimum-scale = "+scale+", maximum-scale = "+scale+", user-scalable = no");
	document.head.appendChild(meta);
}();

//获取html
var html = document.querySelector("html");
//设置html字体大小 = 可视区宽度/16
var width = html.getBoundingClientRect().width;
html.style.fontSize = width/16 + "px"; 

//阻止pc和浏览器默认行为
document.addEventListener('touchstart',function(ev){
	ev.preventDefault();
})
var onOff = true;


var	wrap = document.getElementById('wrap'),
	cont = document.getElementById('cont'),
	//pages = document.getElementsByClassName('.page'),
	w = wrap.clientWidth, //一张的宽度
	len = 0,
	timer = 0;
cont.innerHTML += cont.innerHTML; //复制一份
len = cont.children.length;
cont.style.width = w * len + 'px';
//var page = cont.children
cont.addEventListener('touchstart',start);
cont.addEventListener('touchmove',move);
cont.addEventListener('touchend',end);
function start(ev){
	
	var e = ev.changedTouches[0];
	cont.style.transition = 'none';
	//无缝
	var num = Math.round(cont.offsetLeft / w);
	//console.log(page)
	if(num == 0){
		num = len/2;
		cont.style.left = -num * w + 'px';
	}
	//console.log(num)
	if(-num == len - 1){
		num = len/2-1;
		console.log(num)
		cont.style.left = -num * w + 'px';
	}
	disX = e.pageX - cont.offsetLeft;
	
	
	
};
function move(ev){
	var e = ev.changedTouches[0];
	cont.style.left = e.pageX - disX + 'px';
};
function end(){
	var num = Math.round(cont.offsetLeft / w);
	cont.style.transition = '.5s';
	cont.style.left = num * w + 'px';
	//console.log(num)
};



//点击btn按钮
//按钮停止上下跳动,黑板滑下来
var l = document.querySelector('.left'),
	r = document.querySelector('.right'),
	s = document.querySelector('#start'),
	//end = document.querySelector('.end'),
	e = document.querySelector('#end'),
	btn = document.querySelector('#btn'),
	bg = document.querySelector('.back');
	begin = document.querySelector('#classBegin');
	
	
	//初始化，把行间class变为js中使用
	btn.className = 'btn';
	begin.className = 'classBegin';
	
	e.style.display = 'none';


begin.addEventListener('touchstart',stop);

function stop(ev){
	
	$(s).hide();
	ev.stopPropagation();//阻止冒泡
	$(e).slideUp().show();
	
//	begin.className = '';
//	btn.className = '';
	//btn.style.animation = btn.style.webkitAnimation= 'none';
	
	
};





