import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1mjunbsu.css';
import '../../css/r/rl97opacl.css';
import '../../css/p/ppk8bc7fq.css';
import '../../css/h/h01tyzbfu.css';
import '../../css/e/ev6lq472a.css';
import '../../css/p/prtecqbfy.css';
import '../../css/b/byr218scq.css';
import '../../css/m/mchlg8k5w.css';
import '../../css/n/naj_vpbeh.css';

const viewBox = {"width":24,"height":24};
const content = `<mask id="SVGIHQypetX" class="n1mjunbsu"><path class="rl97opacl"/></mask><mask id="SVGjXBqqeYj" class="n1mjunbsu"><path class="ppk8bc7fq"/></mask><g class="h01tyzbfu"><path class="ev6lq472a"/><circle class="prtecqbfy"/><circle class="byr218scq"/><path mask="url(#SVGIHQypetX)" class="mchlg8k5w"/><path mask="url(#SVGjXBqqeYj)" class="naj_vpbeh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:pallete-2-linear"} {...others} />);
}

export default Component;
