import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/feq_dt35s.css';
import '../../css/x/x_jwp_bge.css';
import '../../css/a/a0gtrrbuj.css';
import '../../css/p/pw_kz6bsy.css';
import '../../css/p/p4-7k1g6n.css';
import '../../css/q/qrptsib0m.css';
import '../../css/v/viyqs8bvj.css';
import '../../css/e/ejmii67ot.css';
import '../../css/o/o2i7gw6ln.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="feq_dt35s"/><path class="x_jwp_bge"/><path class="a0gtrrbuj"/><path class="pw_kz6bsy"/><path class="p4-7k1g6n"/><path class="qrptsib0m"/><path class="viyqs8bvj"/><path class="ejmii67ot"/><path class="o2i7gw6ln"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sun-2-broken"} {...others} />);
}

export default Component;
