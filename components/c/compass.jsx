import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/z1j7k2dhf.css';
import '../../css/j/j1grweb9w.css';
import '../../css/q/q3u1zuboq.css';
import '../../css/q/q2ry6vbdx.css';
import '../../css/x/x9x2k2-hi.css';
import '../../css/g/g_w22obvg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow z1j7k2dhf"/><path class="j1grweb9w"/><path class="q3u1zuboq"/><path class="q2ry6vbdx"/><path class="x9x2k2-hi"/><path class="g_w22obvg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:compass"} {...others} />);
}

export default Component;
