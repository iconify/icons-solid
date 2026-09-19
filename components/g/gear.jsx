import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/brf0aybbd.css';
import '../../css/a/aumkuub3x.css';
import '../../css/f/f4u25_1js.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="brf0aybbd"/><path class="aumkuub3x"/><path class="f4u25_1js"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:gear"} {...others} />);
}

export default Component;
