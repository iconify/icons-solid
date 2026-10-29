import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/w/wvopw9ncy.css';
import '../../css/t/two_v_bki.css';
import '../../css/q/q1-hjfupd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="wvopw9ncy"/><path class="two_v_bki wm-shadow"/><path class="q1-hjfupd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:strikethrough-engrave"} {...others} />);
}

export default Component;
