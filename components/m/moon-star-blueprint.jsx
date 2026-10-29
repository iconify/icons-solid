import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/c/cy13_pbrx.css';
import '../../css/o/otfr25bmf.css';
import '../../css/p/pad0p8bhg.css';
import '../../css/w/wt9elgabp.css';
import '../../css/x/x3btlt9yg.css';
import '../../css/z/z29ur_b7y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="cy13_pbrx wm-deco"/><path class="otfr25bmf wm-deco"/><path class="pad0p8bhg wm-deco"/><path class="wm-k wt9elgabp"/><path class="wm-s x3btlt9yg"/><path class="wm-k z29ur_b7y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:moon-star-blueprint"} {...others} />);
}

export default Component;
