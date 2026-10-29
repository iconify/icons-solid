import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/jgczzeg9g.css';
import '../../css/w/we8c1sbpi.css';
import '../../css/q/qa8_2g2qw.css';
import '../../css/f/f2iz_pbwp.css';
import '../../css/q/qk844vlin.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="jgczzeg9g"/><path class="we8c1sbpi wm-a"/><path class="qa8_2g2qw wm-a"/><path class="f2iz_pbwp"/><path class="qk844vlin wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-man-beard-duo"} {...others} />);
}

export default Component;
