import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/b/beubtdelq.css';
import '../../css/t/tczyniu7p.css';
import '../../css/m/mp3tf_c2z.css';
import '../../css/t/ti7s0kwlh.css';
import '../../css/c/cft-n96oy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="beubtdelq wm-k"/><path class="tczyniu7p wm-a"/><path class="mp3tf_c2z wm-shadow"/><path class="ti7s0kwlh wm-k"/><path class="cft-n96oy wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:video-call-engrave"} {...others} />);
}

export default Component;
