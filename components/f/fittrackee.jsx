import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pp2iz_4kw.css';
import '../../css/i/irq_zt82k.css';
import '../../css/q/qrt3p4ugd.css';
import '../../css/i/iya0f8bca.css';
import '../../css/i/i_sol4bgp.css';
import '../../css/b/boluhybwj.css';
import '../../css/f/fms79mblh.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pp2iz_4kw"/><path class="irq_zt82k"/><path class="qrt3p4ugd"/><path class="iya0f8bca"/><path class="i_sol4bgp"/><path class="boluhybwj"/><path class="fms79mblh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:fittrackee"} {...others} />);
}

export default Component;
