import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/iyrqk-7tp.css';
import '../../css/q/q-j_s-bsp.css';
import '../../css/v/vh4_jvb7b.css';
import '../../css/j/jofkexr8t.css';
import '../../css/y/y4nh-g7yf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="iyrqk-7tp wm-k"/><path class="q-j_s-bsp wm-shadow"/><path class="vh4_jvb7b wm-k"/><path class="jofkexr8t wm-k"/><path class="wm-a y4nh-g7yf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:mehndi-hand-engrave"} {...others} />);
}

export default Component;
