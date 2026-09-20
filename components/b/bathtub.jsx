import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l8-o3xkvv.css';
import '../../css/t/trz38lply.css';
import '../../css/k/kc82ktbem.css';
import '../../css/w/wo9tmoykf.css';
import '../../css/x/x7mot0oxz.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/j/j4zj_-bgx.css';
import '../../css/f/fetx4ubkn.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="l8-o3xkvv"/><path class="trz38lply"/><path class="kc82ktbem"/><path class="wo9tmoykf"/><path class="x7mot0oxz"/><g class="ij2x_72vy"><path class="j4zj_-bgx"/><path class="fetx4ubkn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:bathtub"} {...others} />);
}

export default Component;
