import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xfnmd-a6g.css';
import '../../css/l/lxxngpb3s.css';
import '../../css/z/zmvhe_ben.css';
import '../../css/t/tx_cf-bnt.css';
import '../../css/c/chjw43tgk.css';
import '../../css/v/v9dr8ivzk.css';
import '../../css/r/romyl0bxz.css';
import '../../css/n/nbxpdkbeu.css';
import '../../css/y/yvght4yop.css';
import '../../css/z/zxv8dkbgn.css';
import '../../css/g/gswteqc_m.css';
import '../../css/r/rdfxclbng.css';
import '../../css/m/mfcjnob4a.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xfnmd-a6g"/><path class="lxxngpb3s"/><path class="zmvhe_ben"/><path class="tx_cf-bnt"/><path class="chjw43tgk"/><path class="v9dr8ivzk"/><path class="romyl0bxz"/><path class="nbxpdkbeu"/><path class="yvght4yop"/><path class="zxv8dkbgn"/><linearGradient id="SVGhgHmtbhK" x1="295.5" x2="295.5" y1="170.3" y2="260.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="gswteqc_m"/><stop offset="1" class="rdfxclbng"/></linearGradient><path fill="url(#SVGhgHmtbhK)" class="mfcjnob4a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:touitomamout"} {...others} />);
}

export default Component;
