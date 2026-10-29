import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/u/us82n0z1p.css';
import '../../css/b/brp9urbqa.css';
import '../../css/p/pzz_mmgmb.css';
import '../../css/b/bjp_lfgmg.css';
import '../../css/d/da3dm3ftg.css';
import '../../css/b/bvnrjp2cb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="us82n0z1p wm-deco"/><path class="brp9urbqa wm-deco"/><path class="pzz_mmgmb wm-k"/><path class="bjp_lfgmg wm-a"/><path class="da3dm3ftg wm-k"/><path class="bvnrjp2cb wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:case-upper-blueprint"} {...others} />);
}

export default Component;
