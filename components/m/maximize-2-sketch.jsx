import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/a/avuc086wx.css';
import '../../css/g/g4vf-sb9r.css';
import '../../css/u/ucqk0cbzc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="avuc086wx wm-k"/><path class="g4vf-sb9r wm-k"/><path class="ucqk0cbzc wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:maximize-2-sketch"} {...others} />);
}

export default Component;
