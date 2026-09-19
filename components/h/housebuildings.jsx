import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ir655f5uk.css';
import '../../css/r/ry40u8bpo.css';
import '../../css/k/k4u1hhbpf.css';
import '../../css/w/wtbvvcczv.css';
import '../../css/r/rouxlncca.css';
import '../../css/v/vhhdy_0jt.css';
import '../../css/b/bqgi_lejh.css';
import '../../css/d/d3w_ks4ci.css';
import '../../css/k/kvit1-6jr.css';
import '../../css/t/t-7lcpk5p.css';
import '../../css/c/c74eq43fx.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ir655f5uk"/><path class="ry40u8bpo"/><path class="k4u1hhbpf"/><path class="wtbvvcczv"/><path class="rouxlncca"/><path class="vhhdy_0jt"/><path class="bqgi_lejh"/><path class="d3w_ks4ci"/><path class="kvit1-6jr"/><path class="t-7lcpk5p"/><circle class="c74eq43fx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:housebuildings"} {...others} />);
}

export default Component;
