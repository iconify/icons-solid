import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zxrmji1th.css';
import '../../css/h/h-tcvv5xi.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="zxrmji1th"/><path class="h-tcvv5xi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:tram"} {...others} />);
}

export default Component;
