import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/d2q1tdbbp.css';
import '../../css/m/m3-ef15ju.css';
import '../../css/t/t_jrdsb4n.css';
import '../../css/k/kcbeidzug.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="d2q1tdbbp"/><path class="m3-ef15ju wm-a"/><path class="t_jrdsb4n wm-a"/><path class="kcbeidzug"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:pipette-duo"} {...others} />);
}

export default Component;
