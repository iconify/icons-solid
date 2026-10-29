import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/e4tqlvtml.css';
import '../../css/o/ocqlkk5_u.css';
import '../../css/f/fmp-5vctz.css';
import '../../css/m/m9kc8fbca.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="e4tqlvtml"/><path class="ocqlkk5_u wm-a"/><path class="fmp-5vctz"/><path class="m9kc8fbca"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:firecracker-duo"} {...others} />);
}

export default Component;
