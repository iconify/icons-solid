import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xzxcjlmko.css';
import '../../css/y/ydguzeb8c.css';
import '../../css/x/xjo9-ybmn.css';
import '../../css/d/dj98-0bdw.css';
import '../../css/e/e0gaoebad.css';
import '../../css/b/b2g4bdp0f.css';
import '../../css/x/x_g3z-lro.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wm-k xzxcjlmko"/><path class="wm-k ydguzeb8c"/><path class="wm-k xjo9-ybmn"/><path class="dj98-0bdw wm-shadow"/><path class="e0gaoebad wm-shine"/><path class="b2g4bdp0f wm-shine"/><path class="wm-shine x_g3z-lro"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:kanban"} {...others} />);
}

export default Component;
