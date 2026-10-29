import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/fn-rc_bqj.css';
import '../../css/v/vjyjkb18v.css';
import '../../css/s/srsi27byd.css';
import '../../css/i/izw9l69_c.css';
import '../../css/q/q3a2vkc5i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="fn-rc_bqj"/><path class="vjyjkb18v wm-k"/><path class="srsi27byd wm-a"/><path class="izw9l69_c wm-k"/><path class="q3a2vkc5i wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:package-sketch"} {...others} />);
}

export default Component;
