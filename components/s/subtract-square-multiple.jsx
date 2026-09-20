import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/k5-6_q3ke.css';
import '../../css/i/ideagcboz.css';
import '../../css/e/e5x2664gk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="k5-6_q3ke"/><rect class="ideagcboz"/><path class="e5x2664gk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:subtract-square-multiple"} {...others} />);
}

export default Component;
