import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cgxh-mxno.css';
import '../../css/u/uat8degus.css';
import '../../css/t/try4khehq.css';
import '../../css/p/p-j4lxblc.css';
import '../../css/q/q5zp9bbys.css';
import '../../css/q/qzycdjbgx.css';
import '../../css/k/kt7z89uwe.css';
import '../../css/r/r5agzjvyb.css';
import '../../css/r/rlq6ynuia.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="cgxh-mxno wm-shadow"/><path class="uat8degus wm-shadow"/><path class="try4khehq"/><path class="p-j4lxblc"/><path class="q5zp9bbys"/><path class="qzycdjbgx"/><path class="kt7z89uwe wm-shine"/><path class="r5agzjvyb wm-shine"/><path class="rlq6ynuia"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:shuffle"} {...others} />);
}

export default Component;
