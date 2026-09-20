import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/abl4h_b4r.css';
import '../../css/x/xkfdkbb8u.css';
import '../../css/q/qhbj50ble.css';
import '../../css/b/bkuoeebax.css';
import '../../css/s/spo23mb_m.css';
import '../../css/f/fixz8-b-v.css';
import '../../css/p/p8_mgk28t.css';
import '../../css/i/i27ahacci.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="abl4h_b4r"/><path class="xkfdkbb8u"/><path class="qhbj50ble"/><path class="bkuoeebax"/><path class="spo23mb_m"/><path class="fixz8-b-v"/><path class="p8_mgk28t"/><path class="i27ahacci"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:headphones-customer-support-question"} {...others} />);
}

export default Component;
