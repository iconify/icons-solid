import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j_sq7qbvh.css';
import '../../css/q/qvn4hedkj.css';

const viewBox = {"width":2084,"height":2084};
const content = `<g class="cuyn6tgcc"><path class="j_sq7qbvh"/><path class="qvn4hedkj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:vinfast"} {...others} />);
}

export default Component;
