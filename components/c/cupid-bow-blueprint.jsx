import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/e/e-lr70b5u.css';
import '../../css/e/e2f20sb2g.css';
import '../../css/d/du2d72bnd.css';
import '../../css/k/ktd08lbar.css';
import '../../css/h/hfvky3-vb.css';
import '../../css/p/prkhwsbmv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="e-lr70b5u wm-deco"/><path class="e2f20sb2g wm-deco"/><path class="du2d72bnd wm-deco"/><path class="ktd08lbar wm-k"/><path class="hfvky3-vb wm-a"/><path class="prkhwsbmv wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cupid-bow-blueprint"} {...others} />);
}

export default Component;
