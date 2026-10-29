import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/dzyu15eii.css';
import '../../css/v/vadmmzbem.css';
import '../../css/q/qfc1gtf3w.css';
import '../../css/o/o3c38abvv.css';
import '../../css/f/fa6idnbiz.css';
import '../../css/p/p_2opccie.css';
import '../../css/w/wcjn1091m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="dzyu15eii"/><path class="vadmmzbem wm-k"/><path class="qfc1gtf3w wm-a"/><path class="o3c38abvv wm-s"/><path class="fa6idnbiz wm-k"/><path class="p_2opccie wm-a"/><path class="wcjn1091m wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:alarm-clock-off-sketch"} {...others} />);
}

export default Component;
