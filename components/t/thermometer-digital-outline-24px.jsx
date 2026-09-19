import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/ju7b3cb4d.css';
import '../../css/t/tc-ist7-g.css';
import '../../css/s/slqajwrnj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ju7b3cb4d"/><path clip-rule="evenodd" class="tc-ist7-g"/><path class="slqajwrnj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:thermometer-digital-outline-24px"} {...others} />);
}

export default Component;
