import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kk42hopxo.css';
import '../../css/c/ctrjvstlb.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/z/zmlt407qx.css';
import '../../css/m/mysjf089k.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="kk42hopxo"/><path class="ctrjvstlb"/><g class="ij2x_72vy"><path class="zmlt407qx"/><path class="mysjf089k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:control-knobs"} {...others} />);
}

export default Component;
