import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/vzbtg_b3k.css';
import '../../css/d/d8zqsacyg.css';
import '../../css/q/q_g5f4r3u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="vzbtg_b3k wm-k"/><path class="d8zqsacyg wm-k"/><path class="q_g5f4r3u wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:sliders-sketch"} {...others} />);
}

export default Component;
