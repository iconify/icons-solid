import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nof806bgv.css';
import '../../css/l/lptv8mbtu.css';
import '../../css/l/l8ml99b2h.css';
import '../../css/w/wkuy_sb_v.css';
import '../../css/k/kj2lucbwc.css';
import '../../css/h/hb-plxbgo.css';
import '../../css/r/rs2vyvz2n.css';
import '../../css/e/ee1sp-b2j.css';
import '../../css/o/otey_1b7h.css';
import '../../css/d/dbu5pkbpn.css';
import '../../css/n/nkf53xb_x.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="nof806bgv"/><path class="lptv8mbtu"/><path class="l8ml99b2h"/><path class="wkuy_sb_v"/><path class="kj2lucbwc"/><path class="hb-plxbgo"/><path class="rs2vyvz2n"/><path class="ee1sp-b2j"/><path class="otey_1b7h"/><path class="dbu5pkbpn"/><path class="nkf53xb_x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:penguin-2"} {...others} />);
}

export default Component;
