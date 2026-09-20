import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hg3yhdcod.css';
import '../../css/k/kflwj50xz.css';
import '../../css/c/cihr55ejt.css';
import '../../css/s/sdb9eeb1p.css';
import '../../css/z/z3hbucb_l.css';
import '../../css/i/id9cc5l6h.css';
import '../../css/p/pf95emypg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="hg3yhdcod"/><path class="kflwj50xz"/><path class="cihr55ejt"/><path class="sdb9eeb1p"/><path class="z3hbucb_l"/><path class="id9cc5l6h"/><path class="pf95emypg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:wheel-angle-broken"} {...others} />);
}

export default Component;
