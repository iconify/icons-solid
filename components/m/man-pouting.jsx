import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/whstrqbrp.css';
import '../../css/q/q258mcezu.css';
import '../../css/k/k7yk6bbdt.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="whstrqbrp"/><path class="q258mcezu"/><path class="k7yk6bbdt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:man-pouting"} {...others} />);
}

export default Component;
