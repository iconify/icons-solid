import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/jgczzeg9g.css';
import '../../css/g/golyw5t2b.css';
import '../../css/q/q4is1ubpc.css';
import '../../css/f/f2iz_pbwp.css';
import '../../css/d/d3y9mw6db.css';
import '../../css/y/yihs_iw5i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="jgczzeg9g"/><path class="golyw5t2b wm-a"/><path class="q4is1ubpc wm-a"/><path class="f2iz_pbwp"/><path class="d3y9mw6db"/><path class="wm-a yihs_iw5i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-woman-duo"} {...others} />);
}

export default Component;
