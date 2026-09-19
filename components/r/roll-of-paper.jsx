import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k88w1qbcr.css';
import '../../css/a/a6ria106p.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="k88w1qbcr"/><path class="a6ria106p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:roll-of-paper"} {...others} />);
}

export default Component;
