import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bk1c6ibdc.css';
import '../../css/n/nx2-cvbwa.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="bk1c6ibdc"/><path class="nx2-cvbwa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:cookie"} {...others} />);
}

export default Component;
