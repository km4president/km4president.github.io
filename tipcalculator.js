function calc() {
	var tb=document.getElementById('totalbill').value;
	var rt=document.getElementById('ratingid').value;
	var hm=document.getElementById('howmany').value;
	var tp=Math.round((rt*tb)/hm);
	document.getElementById('tipamount').innerHTML="$"+tp;
	document.body.style.backgroundColor=("yellow");
}
