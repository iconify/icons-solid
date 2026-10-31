import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/g/gwlupkbfn.css';
import '../../css/f/fflhfwbsk.css';
import '../../css/x/xxc2vccgt.css';
import '../../css/e/escwl7bvv.css';
import '../../css/x/x0jpk6i3y.css';
import '../../css/e/ebuz1ubll.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="gwlupkbfn wm-shadow"/><path class="fflhfwbsk"/><path class="xxc2vccgt"/><path class="escwl7bvv"/><path class="x0jpk6i3y"/><path class="ebuz1ubll"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:hand-coins"} {...others} />);
}

export default Component;
