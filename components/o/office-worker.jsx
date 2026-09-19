import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rb4bfebvb.css';
import '../../css/l/lyws1_bjd.css';
import '../../css/u/u0z0to29k.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="rb4bfebvb"/><path class="lyws1_bjd"/><path class="u0z0to29k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:office-worker"} {...others} />);
}

export default Component;
