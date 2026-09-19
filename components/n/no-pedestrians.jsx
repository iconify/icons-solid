import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fpyjgebgf.css';
import '../../css/c/cqahp8kse.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="fpyjgebgf"/><path class="cqahp8kse"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:no-pedestrians"} {...others} />);
}

export default Component;
