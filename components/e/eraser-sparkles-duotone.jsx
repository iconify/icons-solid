import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qve2v4lpf.css';
import '../../css/t/t2f0xziff.css';
import '../../css/u/ucn6k4h_l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="qve2v4lpf"/><path class="t2f0xziff"/><path class="ucn6k4h_l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:eraser-sparkles-duotone"} {...others} />);
}

export default Component;
