import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/l_a4_cb1n.css';
import '../../css/u/uzn2ehbxw.css';
import '../../css/l/lg-8n1num.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="l_a4_cb1n wm-k"/><path class="uzn2ehbxw wm-shadow"/><path class="lg-8n1num wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:square-engrave"} {...others} />);
}

export default Component;
