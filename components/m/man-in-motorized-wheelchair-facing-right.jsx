import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g8idwqlpa.css';
import '../../css/j/jwcvhdcld.css';
import '../../css/e/e3fdoqbix.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="g8idwqlpa"/><path class="jwcvhdcld"/><path class="e3fdoqbix"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:man-in-motorized-wheelchair-facing-right"} {...others} />);
}

export default Component;
