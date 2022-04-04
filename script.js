window.addEventListener("load", function(){
	setTimeout(function(){
		document.getElementById("loading").classList.remove("active"); 
	}, 2000)
})

setTimeout(function(){
	document.getElementById("loading").classList.remove("active"); 
	}, 5000)