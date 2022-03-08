//this function show and hide product description
function showDescText(obj){
	if(document.getElementById){
		var el = document.getElementById(obj);
		var ar = document.getElementById("productsubdesc").getElementsByTagName("div");
		if(el.style.display == "none"){
			for (var i=0; i<ar.length; i++){
				ar[i].style.display = "none";
			}
			el.style.display = "block";
		}else{
			el.style.display = "none";
		}
	}
}

//this funciton hide description on start
function infoldItems(){
	var ar = document.getElementById("productsubdesc").getElementsByTagName("div");
	for(var i=0; i<ar.length; i++){
		ar[i].style.display = "none";
	}
}

function sform_change_topic(){

	//zjistime ktera polozka je vybrana
	var cruseropts;
	cruseropts  = document.sales_form.cruser.options;
	var x = 1;
	var usingprd = "none_selected";
	do{
		if(cruseropts[x].selected == true){
			usingprd = cruseropts[x].value;
		}
	}while(++x < cruseropts.length);


	var finalarr = new Array();
	finalarr = chopts[usingprd];


	//vymazat stavajici polozky
	x = 0;
	do{
		document.sales_form.topic.options[x].value = "";
		document.sales_form.topic.options[x].text = "";

	}while(++x < document.sales_form.topic.options.length);

	//natahnout na pocatecni delku
	document.sales_form.topic.options.length = stopicsnum;

	//vsadit pozadovane polozky
	x = 0;
	do{
		document.sales_form.topic.options[x].value = finalarr[x];
		document.sales_form.topic.options[x].text = stopics[finalarr[x]];

	}while(++x < finalarr.length);

	//nastaveni vybrane polozky na hodnotu no_selected
	var a = 0;
	do{
		document.sales_form.topic.options[a].selected = false;
	}while(++a < document.sales_form.topic.options.length);
	document.sales_form.topic.options[0].selected = true;

	//odriznout prazdne polozky
	document.sales_form.topic.options.length = finalarr.length;

	//vynulovani incrementu
	x = null;
	a = null;
}//konec funkce sform_change_topics
