import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n7s9mvb4w.css';
import '../../css/j/j-08lub9d.css';
import '../../css/u/uru88vgdy.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="n7s9mvb4w"/><path class="j-08lub9d"/><path class="uru88vgdy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:wheelchair-symbol"} {...others} />);
}

export default Component;
