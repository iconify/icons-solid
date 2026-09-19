import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u2us-5bud.css';
import '../../css/l/lse0fc46j.css';
import '../../css/o/ojsv5vdwz.css';
import '../../css/q/q2-1t0j6j.css';
import '../../css/d/d5i4-l-eb.css';
import '../../css/i/iwamkebxr.css';
import '../../css/l/le6sdvbsa.css';
import '../../css/k/ka6da95ad.css';
import '../../css/n/nx_2p_b8o.css';
import '../../css/i/immgxvy2b.css';
import '../../css/z/zaz-2ny7z.css';
import '../../css/g/gsdadibzg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="u2us-5bud"/><path class="lse0fc46j"/><path class="ojsv5vdwz"/><path class="q2-1t0j6j"/><path class="d5i4-l-eb"/><path class="iwamkebxr"/><path class="le6sdvbsa"/><path class="ka6da95ad"/><path class="nx_2p_b8o"/><path class="immgxvy2b"/><path class="zaz-2ny7z"/><path class="gsdadibzg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:surfer"} {...others} />);
}

export default Component;
