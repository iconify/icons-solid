import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e_raf5bng.css';
import '../../css/z/zmz8h403x.css';
import '../../css/t/t9ndhq-8g.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/y/ylpeeyb7l.css';
import '../../css/m/m0qis0d3b.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="e_raf5bng"><path class="zmz8h403x"/><path class="t9ndhq-8g"/></g><g class="ij2x_72vy"><path class="ylpeeyb7l"/><path class="m0qis0d3b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:clapping-hands-dark-skin-tone"} {...others} />);
}

export default Component;
