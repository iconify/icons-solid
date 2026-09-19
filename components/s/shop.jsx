import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r0f-kccao.css';
import '../../css/u/ucywhqb_f.css';
import '../../css/y/ywezfpb2f.css';
import '../../css/h/hp_13x9ul.css';
import '../../css/t/toe-x4bdl.css';
import '../../css/i/i26fchuik.css';
import '../../css/u/u-n1j5bav.css';
import '../../css/i/iu-j6cc2y.css';
import '../../css/p/p5ma6kbvl.css';
import '../../css/r/rh36-b77g.css';
import '../../css/o/ooi9ndb4d.css';
import '../../css/o/ohddqdbak.css';
import '../../css/x/x8u74c97e.css';
import '../../css/a/avu8r0m5x.css';
import '../../css/x/xjh3njbok.css';
import '../../css/f/f2nzejbmt.css';
import '../../css/x/xpu-oabuj.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="r0f-kccao"/><path class="ucywhqb_f"/><path class="ywezfpb2f"/><path class="hp_13x9ul"/><path class="toe-x4bdl"/><path class="i26fchuik"/><g class="u-n1j5bav"><circle class="iu-j6cc2y"/><circle class="p5ma6kbvl"/><circle class="rh36-b77g"/></g><path class="ooi9ndb4d"/><g class="ohddqdbak"><circle class="x8u74c97e"/><path class="avu8r0m5x"/><circle class="xjh3njbok"/><path class="f2nzejbmt"/></g><path class="xpu-oabuj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:shop"} {...others} />);
}

export default Component;
