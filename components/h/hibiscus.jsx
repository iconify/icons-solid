import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/ftn8cqbqg.css';
import '../../css/y/y2s1cfdcj.css';
import '../../css/q/qx1sll5xe.css';
import '../../css/s/ste38-bxc.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="ftn8cqbqg"/><path class="y2s1cfdcj"/><path class="qx1sll5xe"/><path class="ste38-bxc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:hibiscus"} {...others} />);
}

export default Component;
