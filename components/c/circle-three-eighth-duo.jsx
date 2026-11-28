import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lr0bgcb6t.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/ud95brdct.css';
import '../../css/r/r3so_7b4u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lr0bgcb6t secondary"/><g class="dt0cm9dhy primary"><path class="ud95brdct"/><path class="r3so_7b4u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:circle-three-eighth-duo"} {...others} />);
}

export default Component;
