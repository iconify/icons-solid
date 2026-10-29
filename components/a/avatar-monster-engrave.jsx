import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/im9aepbpd.css';
import '../../css/j/jmuf37b3b.css';
import '../../css/w/wq4m20bqh.css';
import '../../css/e/ewb4c0zlw.css';
import '../../css/p/pht4mnbru.css';
import '../../css/p/pfp6hfb3z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="im9aepbpd wm-k"/><path class="jmuf37b3b wm-s"/><path class="wm-shadow wq4m20bqh"/><path class="ewb4c0zlw wm-k"/><path class="pht4mnbru wm-a"/><path class="pfp6hfb3z wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-monster-engrave"} {...others} />);
}

export default Component;
