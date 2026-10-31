import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/p/px_9olbxh.css';
import '../../css/g/gogs_xb7b.css';
import '../../css/m/mnukw_01c.css';
import '../../css/a/ajb8_q_-d.css';
import '../../css/m/m0bov1b-k.css';
import '../../css/j/jgdqkdiyo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="px_9olbxh wm-shadow"/><path class="gogs_xb7b"/><path class="mnukw_01c"/><path class="ajb8_q_-d"/><path class="m0bov1b-k"/><path class="jgdqkdiyo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:droplet"} {...others} />);
}

export default Component;
