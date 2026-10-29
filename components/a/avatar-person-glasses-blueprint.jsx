import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/k/k_6m3abxs.css';
import '../../css/f/fgaqfsbrg.css';
import '../../css/r/rbzq4bjzv.css';
import '../../css/l/lmjkggbvz.css';
import '../../css/t/tj3twqb_w.css';
import '../../css/b/bjck6ebkt.css';
import '../../css/a/aw2-tsbpt.css';
import '../../css/v/vildi5bvg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="k_6m3abxs wm-deco"/><path class="fgaqfsbrg wm-deco"/><path class="rbzq4bjzv wm-deco"/><path class="lmjkggbvz wm-k"/><path class="tj3twqb_w wm-a"/><path class="bjck6ebkt wm-k"/><path class="aw2-tsbpt wm-a"/><path class="vildi5bvg wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-person-glasses-blueprint"} {...others} />);
}

export default Component;
