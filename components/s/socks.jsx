import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fs3rnpb9d.css';
import '../../css/x/xwvkobafx.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="fs3rnpb9d"/><path class="xwvkobafx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:socks"} {...others} />);
}

export default Component;
