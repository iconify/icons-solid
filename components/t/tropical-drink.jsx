import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k7oa3abur.css';
import '../../css/u/u7iumubhg.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="k7oa3abur"/><path class="u7iumubhg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:tropical-drink"} {...others} />);
}

export default Component;
