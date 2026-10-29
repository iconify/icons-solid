import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7zeu0chu.css';
import '../../css/q/qixeugbrl.css';
import '../../css/o/ox-z55bmk.css';
import '../../css/n/nb2ltdbis.css';
import '../../css/f/fc9rowbgy.css';
import '../../css/y/yotovqcsh.css';
import '../../css/r/rqh0xdkke.css';
import '../../css/w/w2hfbjboy.css';
import '../../css/y/yz24hmb_r.css';
import '../../css/j/j_mi5nbhc.css';
import '../../css/u/u_u2kvbda.css';
import '../../css/t/th30pac-t.css';
import '../../css/g/gw8_-_blr.css';
import '../../css/v/vruqm7crz.css';
import '../../css/d/d8_0koq6h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j7zeu0chu wm-shadow"/><path class="qixeugbrl wm-k"/><path class="ox-z55bmk wm-k"/><path class="nb2ltdbis wm-k"/><path class="fc9rowbgy wm-k"/><path class="wm-k yotovqcsh"/><path class="rqh0xdkke wm-shine"/><path class="w2hfbjboy wm-k"/><path class="wm-k yz24hmb_r"/><path class="j_mi5nbhc wm-a"/><path class="u_u2kvbda wm-a"/><path class="th30pac-t wm-a"/><path class="gw8_-_blr wm-a"/><path class="vruqm7crz wm-a"/><path class="d8_0koq6h wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:coins"} {...others} />);
}

export default Component;
