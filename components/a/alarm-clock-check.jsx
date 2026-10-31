import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/p/pe12-hb7b.css';
import '../../css/d/d45l1ubbl.css';
import '../../css/j/j68w4obeb.css';
import '../../css/r/rzic7273f.css';
import '../../css/x/x6ax2vbec.css';
import '../../css/p/p-oel8bws.css';
import '../../css/x/x_bqykk-k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="pe12-hb7b wm-shadow"/><path class="d45l1ubbl"/><path class="j68w4obeb"/><path class="rzic7273f"/><path class="x6ax2vbec"/><path class="p-oel8bws"/><path class="wm-s x_bqykk-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:alarm-clock-check"} {...others} />);
}

export default Component;
