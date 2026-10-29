import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/mdoim3brn.css';
import '../../css/j/jrf-bccmn.css';
import '../../css/b/bpaqc2ohf.css';
import '../../css/t/t23h3n3fw.css';
import '../../css/w/ww__7yboz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="mdoim3brn"/><path class="jrf-bccmn wm-k"/><path class="bpaqc2ohf wm-a"/><path class="t23h3n3fw wm-k"/><path class="wm-a ww__7yboz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:toilet-sketch"} {...others} />);
}

export default Component;
