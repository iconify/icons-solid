import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/j/jf2n79bjo.css';
import '../../css/h/ho03s4a6j.css';
import '../../css/n/na73-vx6x.css';
import '../../css/o/oawk6ybuu.css';
import '../../css/m/mhm8fnzaw.css';
import '../../css/g/g9gyhcceg.css';
import '../../css/s/spcrfc8qp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="jf2n79bjo wm-shadow"/><path class="ho03s4a6j"/><path class="na73-vx6x"/><path class="oawk6ybuu"/><path class="mhm8fnzaw"/><path class="g9gyhcceg wm-shine"/><path class="spcrfc8qp wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:clapperboard"} {...others} />);
}

export default Component;
