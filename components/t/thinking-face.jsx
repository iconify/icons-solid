import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/my0_g5bac.css';
import '../../css/t/t7cusdu_d.css';
import '../../css/a/acm8xxbrc.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="my0_g5bac"/><path class="t7cusdu_d"/><path class="acm8xxbrc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:thinking-face"} {...others} />);
}

export default Component;
