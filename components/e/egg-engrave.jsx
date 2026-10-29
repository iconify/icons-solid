import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/n8avyrinm.css';
import '../../css/d/dby3u6u6j.css';
import '../../css/p/pez66rbtr.css';
import '../../css/t/t_iyb2b1h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="n8avyrinm wm-k"/><path class="dby3u6u6j wm-shadow"/><path class="pez66rbtr wm-k"/><path class="t_iyb2b1h wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:egg-engrave"} {...others} />);
}

export default Component;
