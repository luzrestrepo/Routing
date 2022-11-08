import { useParams } from "react-router-dom";


const ComponenteParametros = props => {

    const {palabra, color, bg} = useParams ();

    return (
        <div>
            {
                isNaN(palabra)?
                    <div style={color?
                    {color: color, background: bg}
                :
                    null
                }>La palabra es : {palabra} </div>
                    :

                    <div>El numero es : {palabra} </div>        
            }
        </div>
    )


}

export default ComponenteParametros;