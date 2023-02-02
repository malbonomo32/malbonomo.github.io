document.getElementById("boton1").addEventListener("click",function(){
    if(document.getElementById("habilidades").style.display == 'none'){
    document.getElementById("habilidades").style.display = 'block';
    this.innerHTML = "Ocultar habilidades";
    }
    else{
        document.getElementById("habilidades").style.display = 'none';
        this.innerHTML = "Mostrar Habilidades";

    }
})
