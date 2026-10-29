import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/ei9be55ro.css';
import '../../css/k/kc3tbqb7h.css';
import '../../css/w/wgkyg6fmx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="ei9be55ro wm-k"/><path class="kc3tbqb7h wm-k"/><path class="wgkyg6fmx wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:zap-off-sketch"} {...others} />);
}

export default Component;
