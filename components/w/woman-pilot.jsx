import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/svh0h_bof.css';
import '../../css/h/h2rcjqw5y.css';
import '../../css/c/co_0nyjkh.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="svh0h_bof"/><path class="h2rcjqw5y"/><path class="co_0nyjkh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:woman-pilot"} {...others} />);
}

export default Component;
