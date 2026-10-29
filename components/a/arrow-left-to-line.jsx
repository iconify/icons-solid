import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/o/ocgpbpxpy.css';
import '../../css/o/oflqhobhm.css';
import '../../css/m/m5ls5gsdo.css';
import '../../css/k/kibsbqfpa.css';
import '../../css/u/ue54jactt.css';
import '../../css/y/ytv9pib4p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="ocgpbpxpy wm-shadow"/><path class="oflqhobhm"/><path class="m5ls5gsdo"/><path class="kibsbqfpa"/><path class="ue54jactt wm-shine"/><path class="wm-deco ytv9pib4p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:arrow-left-to-line"} {...others} />);
}

export default Component;
