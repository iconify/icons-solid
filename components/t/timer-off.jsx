import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/bf3x6zx9b.css';
import '../../css/c/c7rnfmonn.css';
import '../../css/r/rca8xd_xh.css';
import '../../css/p/pjmwky14v.css';
import '../../css/v/v5tfkjbei.css';
import '../../css/q/q99jne7pm.css';
import '../../css/v/v0eyaibau.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="bf3x6zx9b wm-shadow"/><path class="c7rnfmonn"/><path class="rca8xd_xh"/><path class="pjmwky14v"/><path class="v5tfkjbei"/><path class="q99jne7pm"/><path class="v0eyaibau wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:timer-off"} {...others} />);
}

export default Component;
