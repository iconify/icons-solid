import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/sd0xq2bvy.css';
import '../../css/x/xvb7_jbzt.css';
import '../../css/m/mnzbd0b4v.css';
import '../../css/v/vp3_m3b5w.css';
import '../../css/q/qya5idb2k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="sd0xq2bvy wm-k"/><path class="wm-a xvb7_jbzt"/><path class="mnzbd0b4v wm-shadow"/><path class="vp3_m3b5w wm-k"/><path class="qya5idb2k wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:file-image-engrave"} {...others} />);
}

export default Component;
