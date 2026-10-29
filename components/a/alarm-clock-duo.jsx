import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/n0z19zblo.css';
import '../../css/y/yemy-actk.css';
import '../../css/y/y431u0zsu.css';
import '../../css/l/lztux4j4y.css';
import '../../css/g/ghyktpbhu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="n0z19zblo"/><path class="wm-a yemy-actk"/><path class="wm-a y431u0zsu"/><path class="lztux4j4y"/><path class="ghyktpbhu wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:alarm-clock-duo"} {...others} />);
}

export default Component;
