import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v8gazfx0p.css';
import '../../css/n/nx0j_vb-r.css';
import '../../css/w/wycjhibbk.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#SVGkRCCwb7V)" class="cuyn6tgcc"><path class="v8gazfx0p"/><path class="nx0j_vb-r"/></g><defs><clipPath id="SVGkRCCwb7V"><path class="wycjhibbk"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:biting-lip"} {...others} />);
}

export default Component;
