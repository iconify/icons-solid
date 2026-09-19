import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u1_j1h4hu.css';
import '../../css/h/h2oga0fsc.css';
import '../../css/a/a52uhabfd.css';
import '../../css/i/i9o8nmusb.css';
import '../../css/n/nza-pnb1g.css';
import '../../css/y/yoedkcbmm.css';
import '../../css/i/irh-l4bms.css';
import '../../css/t/trhi45bgg.css';
import '../../css/h/hb31-hltx.css';
import '../../css/l/lfbm3sxvu.css';
import '../../css/m/mpjs23bgd.css';

const viewBox = {"width":512,"height":512};
const content = `<rect class="u1_j1h4hu"/><rect class="h2oga0fsc"/><rect class="a52uhabfd"/><rect class="i9o8nmusb"/><rect class="nza-pnb1g"/><rect class="yoedkcbmm"/><rect class="irh-l4bms"/><rect class="trhi45bgg"/><rect class="hb31-hltx"/><rect class="lfbm3sxvu"/><rect class="mpjs23bgd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:film-outline"} {...others} />);
}

export default Component;
