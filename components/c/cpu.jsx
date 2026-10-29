import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yczhntbts.css';
import '../../css/t/t_2lkqbxb.css';
import '../../css/r/rduww18gz.css';
import '../../css/f/fy22vjbrf.css';
import '../../css/j/j1s_m-tgf.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/e/ej8utgbrd.css';
import '../../css/r/r884e-bln.css';
import '../../css/m/ma8mi6ixj.css';
import '../../css/q/q_yw93bsi.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGayXsrcDl" class="yczhntbts"/></defs><g class="t_2lkqbxb"><path class="rduww18gz wm-shadow"/><path class="fy22vjbrf"/><path class="j1s_m-tgf"/><use href="#SVGayXsrcDl" class="d2kvgvbvc"/><path class="ej8utgbrd"/><use href="#SVGayXsrcDl" class="d2kvgvbvc"/><path class="r884e-bln"/><path class="ma8mi6ixj wm-shine"/><path class="q_yw93bsi wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:cpu"} {...others} />);
}

export default Component;
