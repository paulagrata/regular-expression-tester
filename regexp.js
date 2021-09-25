
function searchtext() {

    x = document.getElementById("xID").value;
    y = document.getElementById("yID").value;

    var str = x;
    var patt = new RegExp(y);
    var res = patt.test(str);
    if (res===true){
        res = "text contains search"
    } else{
        res = "text does not contain search"
    }
    document.getElementById("n").innerHTML = res;
    
}

