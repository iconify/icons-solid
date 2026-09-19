import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p_uan37dn.css';
import '../../css/f/ful3fmdky.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="p_uan37dn"/><path class="ful3fmdky"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:petri-dish"} {...others} />);
}

export default Component;
