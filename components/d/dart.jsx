import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z05ebsmne.css';
import '../../css/n/nisslya0g.css';

const viewBox = {"width":128,"height":128};
const content = `<g class="cuyn6tgcc"><path class="z05ebsmne"/><path class="nisslya0g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:dart"} {...others} />);
}

export default Component;
