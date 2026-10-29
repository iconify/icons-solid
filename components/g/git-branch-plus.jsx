import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/u/uhfkdpe2k.css';
import '../../css/t/tgg1tt2iz.css';
import '../../css/h/h8ov2bhpk.css';
import '../../css/z/z-g93dtku.css';
import '../../css/f/futmhgkur.css';
import '../../css/h/hobi5bb0b.css';
import '../../css/p/pvwnheb0m.css';
import '../../css/l/lt53oob8t.css';
import '../../css/e/efqr56byi.css';
import '../../css/r/ry-47_bvx.css';
import '../../css/l/l6fo0zm6w.css';
import '../../css/r/ro0n50j-h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="uhfkdpe2k wm-shadow"/><path class="tgg1tt2iz"/><path class="h8ov2bhpk"/><path class="z-g93dtku"/><path class="futmhgkur"/><path class="hobi5bb0b"/><path class="pvwnheb0m"/><path class="lt53oob8t wm-shine"/><path class="efqr56byi wm-s"/><path class="ry-47_bvx wm-s"/><path class="l6fo0zm6w wm-s"/><path class="ro0n50j-h wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:git-branch-plus"} {...others} />);
}

export default Component;
