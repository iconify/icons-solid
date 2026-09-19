import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e30jevb8n.css';
import '../../css/p/pmtwbjblc.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="e30jevb8n"/><path class="pmtwbjblc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:horse-face"} {...others} />);
}

export default Component;
