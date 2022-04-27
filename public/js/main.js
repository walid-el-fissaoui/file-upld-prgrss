const form = document.querySelector("form"),
  fileInput = form.querySelector(".fupldp__input-file"),
  progress = document.querySelector(".fupldp__progress"),
  uploaded = document.querySelector(".fupldp__uplded");

form.addEventListener("click",()=>{
  fileInput.click();
})

fileInput.onchange = ({target}) => {
  let file = target.files[0];
  if(file) {
    let fileName = file.name;
    console.log(fileName);
    uploadFile(fileName); 
  }
}

function uploadFile(name) {
  let xhr = new XMLHttpRequest();
  xhr.open();
  xhr.upload.addEventListener("progress", ({loaded,total}) => {
    let fileLoaded = Math.floor((loaded / total) * 100);
    let fileTotal = Math.floor(total / 1000);
    console.log(fileLoaded,fileTotal);
  })
  let formData = new FormData(form);
  xhr.send(formData);
}