import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/thnxioxsb.css';
import '../../css/j/jsjezmbcj.css';
import '../../css/j/juu6wob2l.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="thnxioxsb"/><path class="jsjezmbcj"/><path class="juu6wob2l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:person"} {...others} />);
}

export default Component;
