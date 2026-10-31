import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/q/qbhs7mbyn.css';
import '../../css/g/gy5uzqety.css';
import '../../css/s/s6ue-rbnj.css';
import '../../css/o/oaes-bb1q.css';
import '../../css/m/mbu-a9brw.css';
import '../../css/o/o84c9abiv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="qbhs7mbyn wm-shadow"/><path class="gy5uzqety"/><path class="s6ue-rbnj"/><path class="oaes-bb1q"/><path class="mbu-a9brw"/><path class="o84c9abiv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:popcorn"} {...others} />);
}

export default Component;
