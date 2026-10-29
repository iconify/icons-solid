import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/y/y1asmybzv.css';
import '../../css/j/jt0ne9b_u.css';
import '../../css/v/vug_eabcd.css';
import '../../css/f/f7unpibui.css';
import '../../css/j/j_h2px3hc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="y1asmybzv"/><path class="jt0ne9b_u wm-k"/><path class="vug_eabcd wm-a"/><path class="f7unpibui wm-k"/><path class="j_h2px3hc wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:calendar-days-sketch"} {...others} />);
}

export default Component;
