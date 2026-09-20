import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dzws6zn0x.css';
import '../../css/c/c55ag9btm.css';
import '../../css/r/roh-o2f0v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="dzws6zn0x"/><circle class="c55ag9btm"/><path class="roh-o2f0v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:music-note-2-broken"} {...others} />);
}

export default Component;
