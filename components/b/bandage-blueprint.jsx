import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/j/jfxisz_aj.css';
import '../../css/m/m0c6rpfxz.css';
import '../../css/v/vbvx6cakn.css';
import '../../css/q/q5dnpjb2i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="jfxisz_aj wm-deco"/><path class="m0c6rpfxz wm-deco"/><path class="vbvx6cakn wm-deco"/><path class="q5dnpjb2i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:bandage-blueprint"} {...others} />);
}

export default Component;
