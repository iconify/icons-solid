import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ox8x25enn.css';
import '../../css/h/hxjrp7bsm.css';
import '../../css/u/uifpxk46j.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/t/tiw4sgagi.css';
import '../../css/u/u655hlwru.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="ox8x25enn"/><path class="hxjrp7bsm"/><path class="uifpxk46j"/><g class="ij2x_72vy"><path class="tiw4sgagi"/><path class="u655hlwru"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:rooster"} {...others} />);
}

export default Component;
