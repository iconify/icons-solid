import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/v/v5hw-dn0l.css';
import '../../css/x/x48pu7brs.css';
import '../../css/d/do0r66vxz.css';
import '../../css/d/dhtnrybtm.css';
import '../../css/z/ztyy0xb4l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="v5hw-dn0l wm-deco"/><path class="wm-deco x48pu7brs"/><path class="do0r66vxz wm-deco"/><path class="dhtnrybtm"/><path class="ztyy0xb4l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:music-2-blueprint"} {...others} />);
}

export default Component;
