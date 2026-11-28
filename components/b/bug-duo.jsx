import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d0mys3bry.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/wmhbu62zg.css';
import '../../css/a/apxgbkbnj.css';
import '../../css/w/whdadlbkx.css';
import '../../css/r/rioyq6k2h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d0mys3bry secondary"/><g class="dt0cm9dhy primary"><path class="wmhbu62zg"/><path class="apxgbkbnj"/><path class="whdadlbkx"/><path class="rioyq6k2h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:bug-duo"} {...others} />);
}

export default Component;
