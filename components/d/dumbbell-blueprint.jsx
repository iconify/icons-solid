import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/m/mrentlb0t.css';
import '../../css/a/ayj2nrm-v.css';
import '../../css/l/l00otmbzz.css';
import '../../css/c/c9dhhpbwa.css';
import '../../css/z/zb54dbb5w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="mrentlb0t wm-deco"/><path class="ayj2nrm-v wm-deco"/><path class="l00otmbzz wm-deco"/><path class="c9dhhpbwa"/><path class="zb54dbb5w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:dumbbell-blueprint"} {...others} />);
}

export default Component;
