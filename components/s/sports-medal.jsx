import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kzqqqeyxw.css';
import '../../css/n/n5p78uvdd.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="kzqqqeyxw"/><path class="n5p78uvdd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:sports-medal"} {...others} />);
}

export default Component;
