import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/k/ky58d5mec.css';
import '../../css/d/dg4aqcb-n.css';
import '../../css/f/fj2wexb9r.css';
import '../../css/h/hh4wdobeb.css';
import '../../css/p/pzik5rbmc.css';
import '../../css/c/cplyi0b8x.css';
import '../../css/c/cclge1lip.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="ky58d5mec wm-shadow"/><path class="dg4aqcb-n"/><path class="fj2wexb9r"/><path class="hh4wdobeb"/><path class="pzik5rbmc wm-shine"/><path class="cplyi0b8x wm-deco"/><path class="cclge1lip wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:footprints"} {...others} />);
}

export default Component;
