import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/c/cvrlq6qle.css';
import '../../css/t/tvrx6i0_a.css';
import '../../css/o/ow_-56vlg.css';
import '../../css/e/eijah4p0a.css';
import '../../css/w/ws9mggtcl.css';
import '../../css/n/ni5y3baxc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="cvrlq6qle wm-shadow"/><path class="tvrx6i0_a"/><path class="ow_-56vlg"/><path class="eijah4p0a"/><path class="ws9mggtcl"/><path class="ni5y3baxc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:mehndi-hand"} {...others} />);
}

export default Component;
