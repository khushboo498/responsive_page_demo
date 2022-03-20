// navbar dropdown

function dropFunction(){
	var x = document.getElementById('drop-content');
	if (x.style.display === 'block') {
		x.style.display = 'none';
	}	else {
		x.style.display= 'block';
	}
}

// sidebar

function sideBarOpen() {
	document.getElementById('side-navbar').style.display = 'block';

	
}
 function navClose() {
 	document.getElementById('side-navbar').style.display = 'none';

 }
 // small screen navbar
 function clickFunction() {
 	var z = document.getElementById('onclick-content');
 	if (z.style.display ==='block'){
 		z.style.display = 'none';
 	} else {
 		z.style.display = 'block';
 	}
 }

  function closeNav() {
 	var z = document.getElementById('onclick-content');
 	if (z.style.display ==='block'){
 		z.style.display = 'none';
 	}
 }