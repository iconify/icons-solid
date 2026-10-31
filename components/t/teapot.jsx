import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/k/kamvjznde.css';
import '../../css/j/jb457_dpg.css';
import '../../css/t/t-puil-ap.css';
import '../../css/e/ejqfli3hh.css';
import '../../css/g/gdnho6bhs.css';
import '../../css/m/mvig8lbca.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="kamvjznde wm-shadow"/><path class="jb457_dpg"/><path class="t-puil-ap"/><path class="ejqfli3hh"/><path class="gdnho6bhs wm-s"/><path class="mvig8lbca"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:teapot"} {...others} />);
}

export default Component;
