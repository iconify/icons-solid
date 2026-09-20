import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/codjm1acu.css';
import '../../css/w/w_u6qvpis.css';
import '../../css/u/ub6bhgbil.css';
import '../../css/b/bgyr9zbmi.css';
import '../../css/o/ovhe1hbde.css';
import '../../css/b/bqwu4-b3n.css';
import '../../css/w/w797or2bn.css';
import '../../css/p/pk4f3q2-m.css';
import '../../css/q/qxr8_ybny.css';
import '../../css/k/k0qj-0b5m.css';
import '../../css/m/mto5cd9px.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="codjm1acu"/><circle class="w_u6qvpis"/><circle class="ub6bhgbil"/><circle class="bgyr9zbmi"/><circle class="ovhe1hbde"/><circle class="bqwu4-b3n"/><path class="w797or2bn"/><path class="pk4f3q2-m"/><path class="qxr8_ybny"/><path class="k0qj-0b5m"/><path class="mto5cd9px"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flag-french-southern-territories"} {...others} />);
}

export default Component;
