import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tacsdab9k.css';
import '../../css/y/y1zk3ibct.css';
import '../../css/y/yog1qtylw.css';
import '../../css/u/u06hebuej.css';
import '../../css/c/cdulb_b0b.css';
import '../../css/e/e_ag_ub7i.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="tacsdab9k"/><path class="y1zk3ibct"/><path class="yog1qtylw"/><path class="u06hebuej"/><path class="cdulb_b0b"/><path class="e_ag_ub7i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:browser-multiple-window"} {...others} />);
}

export default Component;
