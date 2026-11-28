import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ry8o3pbhh.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/natbz7biv.css';
import '../../css/e/e93f6r9ct.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ry8o3pbhh secondary"/><g class="dt0cm9dhy primary"><path class="natbz7biv"/><path class="e93f6r9ct"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:plane-takeoff-duo"} {...others} />);
}

export default Component;
