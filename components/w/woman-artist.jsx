import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f1c4y6ikk.css';
import '../../css/u/urg7fxngv.css';
import '../../css/t/tb8ekkbrt.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="f1c4y6ikk"/><path class="urg7fxngv"/><path class="tb8ekkbrt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:woman-artist"} {...others} />);
}

export default Component;
