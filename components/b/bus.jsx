import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/z3cb_j7ez.css';
import '../../css/q/q0z4nob4z.css';
import '../../css/i/ild3phboo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="z3cb_j7ez"/><path class="q0z4nob4z wm-a"/><path class="ild3phboo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:bus"} {...others} />);
}

export default Component;
