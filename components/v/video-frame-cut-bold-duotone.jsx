import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/manx2832l.css';
import '../../css/i/inowgf1od.css';
import '../../css/s/s9xp0qbks.css';
import '../../css/p/pk3k9_xdm.css';
import '../../css/k/kziyyodiz.css';
import '../../css/r/r0ut4ubdk.css';
import '../../css/e/encgw1sgz.css';
import '../../css/f/fb411ub2i.css';
import '../../css/l/l4ty0rvhb.css';
import '../../css/c/cokqabbkf.css';
import '../../css/u/ux5cbxbmg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="manx2832l"/><path class="inowgf1od"/><path class="s9xp0qbks"/><path class="pk3k9_xdm"/><path class="kziyyodiz"/><path class="r0ut4ubdk"/><path class="encgw1sgz"/><path class="fb411ub2i"/><path class="l4ty0rvhb"/><path class="cokqabbkf"/><path class="ux5cbxbmg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:video-frame-cut-bold-duotone"} {...others} />);
}

export default Component;
