import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/z/z_eqswwmj.css';
import '../../css/e/eyvxrg93r.css';
import '../../css/w/wr92o1bsm.css';
import '../../css/l/lr95qxbbp.css';
import '../../css/r/r3x92bjpk.css';
import '../../css/q/q294q2b5s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="wm-deco z_eqswwmj"/><path class="eyvxrg93r wm-deco"/><path class="wm-deco wr92o1bsm"/><path class="lr95qxbbp wm-k"/><path class="r3x92bjpk wm-a"/><path class="q294q2b5s wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:gallery-horizontal-blueprint"} {...others} />);
}

export default Component;
