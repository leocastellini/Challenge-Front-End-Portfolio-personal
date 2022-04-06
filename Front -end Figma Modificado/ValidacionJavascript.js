
const nombre = document. getElementById("nombreapellido");
const email = document. getElementById("correoelectronico");
const asunto = document. getElementById("asunto");
const mensaje = document. getElementById("mensaje");
const form = document. getElementById("form");
const parrafo = document. getElementById("warnings");

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    parrafo.innerHTML = ""
    if(nombre.nodeValue.length <9){
        warnings += 'nombre muy corto <br>'
        enviar= true
  }
   
  if(regexEmail.test(email.value)){
      warning += 'el email no es valido <br>'
      enviar=true
  }   
  if (asunto.value.length <8){
      warning += 'la contraseña no es valida <br>'
      enviar = true 
  }
  if(mensaje.value.length <20){
    warning += 'no se admiten mas letras <br>'
    enviar = true
  }else{
      mensaje.length = !true
}
  
  if (enviar){
      parrafo.innerHTML = warnings
  }else{
      parrafo.innerHTML = "Enviado"
  }
 } 
 
 })
