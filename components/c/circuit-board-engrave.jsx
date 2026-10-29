import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/gtmmvyb0k.css';
import '../../css/p/pkxbihy8h.css';
import '../../css/u/uzn2ehbxw.css';
import '../../css/l/lg-8n1num.css';
import '../../css/j/jsyt9abxh.css';
import '../../css/q/qpzat4bis.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="gtmmvyb0k wm-k"/><path class="pkxbihy8h wm-a"/><path class="uzn2ehbxw wm-shadow"/><path class="lg-8n1num wm-k"/><path class="jsyt9abxh wm-a"/><path class="qpzat4bis wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:circuit-board-engrave"} {...others} />);
}

export default Component;
