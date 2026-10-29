import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/a/axhg_lbec.css';
import '../../css/m/mhdr543mh.css';
import '../../css/d/dq5cs_wno.css';
import '../../css/z/zuoncxwim.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="axhg_lbec wm-deco"/><path class="mhdr543mh wm-deco"/><path class="dq5cs_wno"/><path class="zuoncxwim"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:align-left-blueprint"} {...others} />);
}

export default Component;
