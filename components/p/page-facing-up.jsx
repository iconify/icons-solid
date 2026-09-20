import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k_ljy4b7o.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/r/r-s7y6bgr.css';
import '../../css/j/jmibpchcz.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="k_ljy4b7o"/><g class="ij2x_72vy"><path class="r-s7y6bgr"/><path class="jmibpchcz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:page-facing-up"} {...others} />);
}

export default Component;
