//Seleccionando lso elementos necesarios
const filterItem = document.querySelector(".filtro");
const filterImg = document.querySelectorAll(".galeria .image");

window.onload = ()=>{ //Despues que la pagina cargue
  filterItem.onclick = (selectedItem)=>{ //Si el usuario selecciono sobre la etiqueta div "filterItem" 
    if(selectedItem.target.classList.contains("item")){ //Si el usuario seleciona un item como ".item" class
      filterItem.querySelector(".active").classList.remove("active"); //remueve la clase "active la cual esta en el primer item"
      selectedItem.target.classList.add("active"); //añadiendo la clase "active" al item sellcionado por el usuario
      let filterName = selectedItem.target.getAttribute("data-name"); //obteniendo el valor del data-name que el ususario selecciono y guardandolo en la vairable "filtername"
      filterImg.forEach((image) => {
        let filterImges = image.getAttribute("data-name"); //obteniendo el valor del data-name de la imagen
        //si el ususario selecciono el data-name del item y es igual al data-name de la imagen 
        //o el ususario selecciono el data-name del item y el valor es igual a "all"
        if((filterImges == filterName) || (filterName == "all")){
          image.classList.remove("hide"); //Primero se remueve la clase hide de la imagen
          image.classList.add("show"); //añande la clase show en la imagen
        }else{
          image.classList.add("hide"); //añade la clase hide en la imagen
          image.classList.remove("show"); //remueve la clase show de la imagen
        }
      });
    }
  }
  for (let i = 0; i < filterImg.length; i++) {
    filterImg[i].setAttribute("onclick", "preview(this)");
  }
}

  //Ahora viene la funcion del Fullscreen
  //Seleccionando todos los elementos requeridos para el fullscreen
  const previewBox = document.querySelector(".preview-box"),
  categoryName = previewBox.querySelector(".title p"),
  previewImg = previewBox.querySelector("img"),
  closeIcon = previewBox.querySelector(".close"),
  shadow = document.querySelector(".shadow");

function preview(element) {
  //una vez el usuario de click se ocultara la barra de scroll para que cuando se muestre el previewBox no pueda subir ni bajar
  document.querySelector("body").style.overflow = "hidden";
  let selectedPrevImg = element.querySelector("img").src; //aqui se obtiene el link de la imagen
  let selectedImgCategory = element.getAttribute("data-text"); //cuando el usuario de click se obtendra el data-text de la imagen correspondiente
  previewImg.src = selectedPrevImg; //aqui se pasa el recuros de la imagen para el previewBox asi se muestra la imagen seleccionada
  categoryName.textContent = selectedImgCategory; //aqui se pasa el valor que tiene data-name en los nombres de categoria
  previewBox.classList.add("show"); //muestra la previewBox
  shadow.classList.add("show"); //muestra el fondo gris y opaco
  closeIcon.onclick = () => { //Si el usuario le da click al icono close de la previewBox
    previewBox.classList.remove("show"); //oculta la previewBox
    shadow.classList.remove("show"); //oculta el fondo gris y opaco
    document.querySelector("body").style.overflow = "auto"; //vuelve a mostrar la barra de scroll en el body
  }
}
