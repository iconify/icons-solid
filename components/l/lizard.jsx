import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/iv2nlwmrl.css';
import '../../css/j/jo60q4_5a.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="iv2nlwmrl"/><path class="jo60q4_5a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:lizard"} {...others} />);
}

export default Component;
