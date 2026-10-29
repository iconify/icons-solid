import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x-7aep4mn.css';
import '../../css/v/vhgl9gbza.css';
import '../../css/v/vq_g3acij.css';
import '../../css/z/zfq5u-blg.css';
import '../../css/b/bhfkygazv.css';
import '../../css/f/f_5u0lo_j.css';
import '../../css/r/raz6eqpxq.css';
import '../../css/e/e5gn0vbky.css';
import '../../css/b/biyku889e.css';
import '../../css/o/ooma7docj.css';
import '../../css/l/lwdcpn--n.css';
import '../../css/k/k2bv5kb3h.css';
import '../../css/a/a9kvt0bnv.css';
import '../../css/d/dd452obfk.css';
import '../../css/f/fh_z49e3k.css';
import '../../css/m/m5rgq6bpa.css';
import '../../css/p/pa54utbtg.css';
import '../../css/k/kig2p3bwg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-shadow x-7aep4mn"/><path class="vhgl9gbza wm-k"/><path class="vq_g3acij wm-k"/><path class="wm-k zfq5u-blg"/><path class="bhfkygazv wm-k"/><path class="f_5u0lo_j wm-shine"/><path class="raz6eqpxq wm-k"/><path class="e5gn0vbky wm-a"/><path class="biyku889e wm-a"/><path class="ooma7docj wm-a"/><path class="lwdcpn--n wm-a"/><path class="k2bv5kb3h wm-a"/><path class="a9kvt0bnv wm-a"/><path class="dd452obfk wm-a"/><path class="fh_z49e3k wm-a"/><path class="m5rgq6bpa wm-a"/><path class="pa54utbtg wm-a"/><path class="kig2p3bwg wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:avatar-robot"} {...others} />);
}

export default Component;
