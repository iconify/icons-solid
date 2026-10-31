import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/e/esl52bb5e.css';
import '../../css/i/i5k3d_x8n.css';
import '../../css/u/ub6-4ksez.css';
import '../../css/w/we7wezkjf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGbKbg3c5x" x1="9" x2="15" y1="2.5" y2="21.49" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGbKbg3c5x)" class="esl52bb5e"/><path class="i5k3d_x8n wm-shine"/><path class="ub6-4ksez wm-shine"/><path class="we7wezkjf wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:virus"} {...others} />);
}

export default Component;
