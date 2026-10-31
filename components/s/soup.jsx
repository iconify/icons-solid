import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/i/i8x5r5b6y.css';
import '../../css/k/ktsdmackl.css';
import '../../css/z/z5r66k4dx.css';
import '../../css/g/glvepwqcj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="i8x5r5b6y wm-shadow"/><path class="ktsdmackl"/><path class="z5r66k4dx"/><path class="glvepwqcj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:soup"} {...others} />);
}

export default Component;
