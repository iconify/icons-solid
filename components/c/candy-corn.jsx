import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/r/r837omb-t.css';
import '../../css/g/glsokcc4t.css';
import '../../css/z/zoc0r_xnf.css';
import '../../css/u/u2q5ayb7h.css';
import '../../css/u/u_flykewq.css';
import '../../css/m/m5y869bec.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="r837omb-t wm-shadow"/><path class="glsokcc4t"/><path class="zoc0r_xnf"/><path class="u2q5ayb7h"/><path class="u_flykewq"/><path class="m5y869bec"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:candy-corn"} {...others} />);
}

export default Component;
