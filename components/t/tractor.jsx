import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h381thble.css';
import '../../css/g/gfy7dubaz.css';
import '../../css/g/gm-4-ga1l.css';
import '../../css/e/e46yqsb7n.css';
import '../../css/a/auvasd15o.css';
import '../../css/y/ytdgz-ebx.css';
import '../../css/r/r_jjm9opi.css';
import '../../css/f/fk314mbah.css';
import '../../css/q/qmbr_ccpn.css';
import '../../css/k/kei8t32lv.css';
import '../../css/i/ixl5kubnh.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="h381thble"/><path class="gfy7dubaz"/><path class="gm-4-ga1l"/><path class="e46yqsb7n"/><path class="auvasd15o"/><path class="ytdgz-ebx"/><path class="r_jjm9opi"/><path class="fk314mbah"/><path class="qmbr_ccpn"/><path class="kei8t32lv"/><path class="ixl5kubnh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:tractor"} {...others} />);
}

export default Component;
