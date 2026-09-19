import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/k4trvobuh.css';
import '../../css/i/ikc7j_b_o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="k4trvobuh"/><path class="ikc7j_b_o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:ufo"} {...others} />);
}

export default Component;
