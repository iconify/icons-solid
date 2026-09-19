import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dojp42b2k.css';
import '../../css/r/rwe6ggbzn.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="dojp42b2k"/><path class="rwe6ggbzn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:comet"} {...others} />);
}

export default Component;
