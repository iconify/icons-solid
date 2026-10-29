import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/d/dagnp97jn.css';
import '../../css/q/q0y9u0bct.css';
import '../../css/m/mcwp8kbuw.css';
import '../../css/h/hmaf7acek.css';
import '../../css/l/l849fw07m.css';
import '../../css/j/jy843347v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="dagnp97jn wm-shadow"/><path class="q0y9u0bct"/><path class="mcwp8kbuw"/><path class="hmaf7acek"/><path class="l849fw07m wm-shine"/><path class="jy843347v wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:chevron-last"} {...others} />);
}

export default Component;
