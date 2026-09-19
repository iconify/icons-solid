import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xhfhmb-ve.css';
import '../../css/s/sorxzqbxa.css';
import '../../css/s/sfe0kwq8b.css';
import '../../css/q/q5jpikb3y.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="xhfhmb-ve"/><path class="sorxzqbxa"/><path class="sfe0kwq8b"/><path class="q5jpikb3y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:man-astronaut"} {...others} />);
}

export default Component;
