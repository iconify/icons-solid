import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vslgelbgz.css';
import '../../css/t/to5t-2sbk.css';
import '../../css/z/zt1astemn.css';
import '../../css/o/olgmv1buy.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="vslgelbgz"/><path class="to5t-2sbk"/><path class="zt1astemn"/><path class="olgmv1buy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:pouring-liquid"} {...others} />);
}

export default Component;
