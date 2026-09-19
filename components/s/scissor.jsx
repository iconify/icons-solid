import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/t/t145a5obr.css';
import '../../css/k/k29615b7v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="t145a5obr"/><path class="k29615b7v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:scissor"} {...others} />);
}

export default Component;
