import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/k/k_6m3abxs.css';
import '../../css/f/fgaqfsbrg.css';
import '../../css/r/rbzq4bjzv.css';
import '../../css/i/innyvac3m.css';
import '../../css/h/hozjnccou.css';
import '../../css/f/ftqe_gbqb.css';
import '../../css/a/aw2-tsbpt.css';
import '../../css/v/vildi5bvg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="k_6m3abxs wm-deco"/><path class="fgaqfsbrg wm-deco"/><path class="rbzq4bjzv wm-deco"/><path class="innyvac3m wm-k"/><path class="hozjnccou wm-a"/><path class="ftqe_gbqb wm-k"/><path class="aw2-tsbpt wm-a"/><path class="vildi5bvg wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-older-woman-blueprint"} {...others} />);
}

export default Component;
