import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/xyuyjnbmb.css';
import '../../css/x/xf879kbtn.css';
import '../../css/x/xb6o97btl.css';
import '../../css/k/k5csy4bbb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="wm-k xyuyjnbmb"/><path class="wm-a xf879kbtn"/><path class="wm-k xb6o97btl"/><path class="k5csy4bbb wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:airplay-sketch"} {...others} />);
}

export default Component;
