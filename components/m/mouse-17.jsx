import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/q_ocl7bux.css';
import '../../css/o/o5vr09bii.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="q_ocl7bux"/><path class="o5vr09bii"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:mouse-17"} {...others} />);
}

export default Component;
