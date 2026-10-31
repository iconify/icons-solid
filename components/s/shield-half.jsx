import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/d/dv4zy6bcc.css';
import '../../css/w/wmcvuk6qi.css';
import '../../css/b/bz9kb_byf.css';
import '../../css/v/v1rn-v3ue.css';
import '../../css/o/o9pue_v4x.css';
import '../../css/w/w6jkyfbpg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="dv4zy6bcc wm-shadow"/><path class="wmcvuk6qi"/><path class="bz9kb_byf"/><path class="v1rn-v3ue"/><path class="o9pue_v4x"/><path class="w6jkyfbpg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:shield-half"} {...others} />);
}

export default Component;
