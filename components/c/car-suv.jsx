import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/q7pmbvbyy.css';
import '../../css/o/o0ec1wbes.css';
import '../../css/r/r_a80bcel.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="q7pmbvbyy"/><path class="o0ec1wbes"/><path class="r_a80bcel"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:car-suv"} {...others} />);
}

export default Component;
