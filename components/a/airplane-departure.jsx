import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w3_z4jwuz.css';
import '../../css/d/diganyb_v.css';
import '../../css/d/dq5vnybwc.css';
import '../../css/k/kr-uft0lf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="w3_z4jwuz"/><path class="diganyb_v"/><path class="dq5vnybwc"/><path class="kr-uft0lf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:airplane-departure"} {...others} />);
}

export default Component;
