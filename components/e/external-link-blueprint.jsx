import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/t/t7e7__ysg.css';
import '../../css/m/mhue-bcqb.css';
import '../../css/b/bxjv56brc.css';
import '../../css/v/v49dj002h.css';
import '../../css/z/z31tv2bfd.css';
import '../../css/o/oi1g4_sbp.css';
import '../../css/w/w8orgdbkn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="t7e7__ysg wm-deco"/><path class="mhue-bcqb wm-deco"/><path class="bxjv56brc wm-deco"/><path class="v49dj002h wm-k"/><path class="wm-a z31tv2bfd"/><path class="oi1g4_sbp wm-k"/><path class="w8orgdbkn wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:external-link-blueprint"} {...others} />);
}

export default Component;
