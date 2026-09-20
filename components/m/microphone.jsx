import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/crnwivglc.css';
import '../../css/t/tvip5acsj.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="crnwivglc"/><path class="tvip5acsj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"rivet-icons:microphone"} {...others} />);
}

export default Component;
