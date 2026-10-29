import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/e1j58ib4f.css';
import '../../css/j/jqsrvlbqh.css';
import '../../css/w/wgr5uv0-u.css';
import '../../css/y/y5dvwo25s.css';
import '../../css/x/x0w6nibqk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="e1j58ib4f wm-k"/><path class="jqsrvlbqh wm-s"/><path class="wgr5uv0-u wm-shadow"/><path class="wm-k y5dvwo25s"/><path class="wm-s x0w6nibqk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:message-square-dot-engrave"} {...others} />);
}

export default Component;
