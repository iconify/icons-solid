import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h32t530tv.css';
import '../../css/n/n9cednr3v.css';
import '../../css/w/wlicqr-jz.css';
import '../../css/w/w794gteam.css';
import '../../css/y/ywotupbte.css';
import '../../css/e/e28ga4b7y.css';
import '../../css/w/wt130ebjt.css';
import '../../css/x/xhar8hbrz.css';
import '../../css/m/m186w2bpn.css';
import '../../css/h/hsqjekbun.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="h32t530tv"/><path class="n9cednr3v"/><path class="wlicqr-jz"/><path class="w794gteam"/><path class="ywotupbte"/><path class="e28ga4b7y"/><path class="wt130ebjt"/><path class="xhar8hbrz"/><path class="m186w2bpn"/><path class="hsqjekbun"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:coldsweat"} {...others} />);
}

export default Component;
