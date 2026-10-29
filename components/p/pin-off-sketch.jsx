import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/gptpwlb9f.css';
import '../../css/j/jf539qr6e.css';
import '../../css/r/ro8qbb4ay.css';
import '../../css/j/jih11sbhm.css';
import '../../css/e/ek1--dbym.css';
import '../../css/b/brjb8ccha.css';
import '../../css/i/ivea_gbwc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="gptpwlb9f"/><path class="jf539qr6e wm-k"/><path class="ro8qbb4ay wm-a"/><path class="jih11sbhm wm-s"/><path class="ek1--dbym wm-k"/><path class="brjb8ccha wm-a"/><path class="ivea_gbwc wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:pin-off-sketch"} {...others} />);
}

export default Component;
