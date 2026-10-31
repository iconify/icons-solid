import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/d/dy1d35oha.css';
import '../../css/n/n84ewqbae.css';
import '../../css/r/rtpyvsh2d.css';
import '../../css/t/t9cb7dbzy.css';
import '../../css/n/nicct9b5v.css';
import '../../css/q/qdw6ex12b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="dy1d35oha wm-shadow"/><path class="n84ewqbae"/><path class="rtpyvsh2d"/><path class="t9cb7dbzy"/><path class="nicct9b5v"/><path class="qdw6ex12b wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:laddoo"} {...others} />);
}

export default Component;
