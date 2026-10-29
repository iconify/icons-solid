import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/z3fy_envj.css';
import '../../css/w/wp31-1bdq.css';
import '../../css/t/ty9mbdqxq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="z3fy_envj"/><path class="wm-a wp31-1bdq"/><path class="ty9mbdqxq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:paste"} {...others} />);
}

export default Component;
