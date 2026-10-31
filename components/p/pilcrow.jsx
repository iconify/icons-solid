import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/w/whqx1yb0n.css';
import '../../css/s/st_6fbb3m.css';
import '../../css/v/v0t0eobhb.css';
import '../../css/l/l83b_bbgl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="whqx1yb0n wm-shadow"/><path class="st_6fbb3m"/><path class="v0t0eobhb"/><path class="l83b_bbgl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:pilcrow"} {...others} />);
}

export default Component;
