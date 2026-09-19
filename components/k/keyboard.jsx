import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cwz9bc9bl.css';
import '../../css/u/u3xtssbxt.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="cwz9bc9bl"/><path class="u3xtssbxt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:keyboard"} {...others} />);
}

export default Component;
