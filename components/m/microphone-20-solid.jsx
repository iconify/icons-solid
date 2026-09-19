import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i75exxbjl.css';
import '../../css/e/eu1d5q63v.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="i75exxbjl"/><path class="eu1d5q63v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:microphone-20-solid"} {...others} />);
}

export default Component;
