import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/w/wfu081b6r.css';
import '../../css/i/iyuil1buq.css';
import '../../css/v/vg6iudb8d.css';
import '../../css/q/qw5ja0s0s.css';
import '../../css/w/w-31wubkx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wfu081b6r wm-shadow"/><path class="iyuil1buq"/><path class="vg6iudb8d"/><path class="qw5ja0s0s"/><path class="w-31wubkx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:rainbow"} {...others} />);
}

export default Component;
