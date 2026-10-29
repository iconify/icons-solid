import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/j/jefapp8zi.css';
import '../../css/x/x-p788bhm.css';
import '../../css/h/h3amrbcmd.css';
import '../../css/g/gr51g0biu.css';
import '../../css/t/tny1izaee.css';
import '../../css/c/c6mo7m0bg.css';
import '../../css/u/u5y7ij2je.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="jefapp8zi wm-deco"/><path class="wm-deco x-p788bhm"/><path class="h3amrbcmd wm-deco"/><path class="gr51g0biu wm-k"/><path class="tny1izaee wm-s"/><path class="c6mo7m0bg wm-k"/><path class="u5y7ij2je wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:user-heart-blueprint"} {...others} />);
}

export default Component;
