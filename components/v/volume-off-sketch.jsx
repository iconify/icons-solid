import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/i-_or_22r.css';
import '../../css/l/l8h560gpm.css';
import '../../css/w/w1g8kv4lt.css';
import '../../css/u/uz5aqebtu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="i-_or_22r"/><path class="l8h560gpm wm-s"/><path class="w1g8kv4lt wm-k"/><path class="uz5aqebtu wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:volume-off-sketch"} {...others} />);
}

export default Component;
