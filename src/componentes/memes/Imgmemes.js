import React,{useState} from "react";
import "./Imgmemes.css";
import html2canvas from "html2canvas";
const Imgmeme = () => {
    const [imgmeme, setimgMeme] = useState("6");
    const [textmeme, setTextmeme] = useState(); //Declare dos variables de estado siempre me va a guardar el ultimo
    
    const textomeme=(e)=>{
        setTextmeme(e.target.value);
    }//valor del contenido del input
    const seleccionarImg=(e)=>{
        setimgMeme(e.target.value);
        const descargar=(e)=>{
            html2canvas(document.querySelector("#exportar")).then(function(canvas) {
                let img = canvas.toDataURL("memesImg.jpg");
                let link = document.createElement("a");
                link.download = "memepropio.png";
                link.href = img;
                link.click();
        
        });
}
    }
    return (
    <div className="memes">
        <h1>Editor de memes</h1>
        <h2>Realiza tu propio meme con ka imagen que seleccionas</h2>
        <h3>Texto del MEME</h3>
        <input onChange={textomeme}className="form-control" type="text" />
        <h3>Seleciona tu imagen</h3>
        <select onChange={seleccionarImg} >
<option value={6}>Anna </option>
<option value={7}>Futurama</option>
<option value={8}>Simpson</option>
<option value={9}>Piggy</option>
</select>
<figure className="memes">
    <p className="meme-txt">{textmeme}</p>
<img src={`./img/${imgmeme}.jpg`} className="figure" alt="memefigure">
</img>
</figure>
<button type="button" className="boton">Descargar meme</button>
    </div>
  )
}

export default Imgmeme
