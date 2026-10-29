import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/h/hngrqwb5t.css';
import '../../css/f/fcyg8zbdc.css';
import '../../css/o/o3ggb2czz.css';
import '../../css/m/mwcb5wb9h.css';
import '../../css/s/saxk-lbfy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="hngrqwb5t wm-deco"/><path class="fcyg8zbdc wm-deco"/><path class="o3ggb2czz wm-deco"/><path class="mwcb5wb9h"/><path class="saxk-lbfy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:bluetooth-blueprint"} {...others} />);
}

export default Component;
