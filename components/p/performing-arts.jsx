import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lbgjaev5h.css';
import '../../css/u/uwpg14ssu.css';
import '../../css/w/wycjhibbk.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#SVGkRCCwb7V)" class="cuyn6tgcc"><path class="lbgjaev5h"/><path class="uwpg14ssu"/></g><defs><clipPath id="SVGkRCCwb7V"><path class="wycjhibbk"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:performing-arts"} {...others} />);
}

export default Component;
