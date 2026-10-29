import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/t/tl-zj9b2h.css';
import '../../css/p/p31g1efrm.css';
import '../../css/n/nge5cfbll.css';
import '../../css/n/nz3t-ub3p.css';
import '../../css/y/yxjk1_bmb.css';
import '../../css/v/vu9lr1jgw.css';
import '../../css/c/cjkg_rbbr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="tl-zj9b2h wm-deco"/><path class="p31g1efrm wm-deco"/><path class="nge5cfbll wm-deco"/><path class="nz3t-ub3p wm-k"/><path class="wm-a yxjk1_bmb"/><path class="vu9lr1jgw wm-k"/><path class="cjkg_rbbr wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:folders-blueprint"} {...others} />);
}

export default Component;
