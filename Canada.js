var x=80;
var y=0;
for(var i=0;i<600;i++){
    y=x+i*10;
    if(y<=600){
        console.log(y);
    }
    else{
        console.log("this is last print! i==" + i);
        break;
    }
}
