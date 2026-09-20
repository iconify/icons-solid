import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/amgqiybcj.css';
import '../../css/w/w3a7pgbtx.css';
import '../../css/m/m2q7v_gjq.css';
import '../../css/r/rsris_b3l.css';
import '../../css/c/ctg14gobl.css';
import '../../css/r/romdoeucp.css';
import '../../css/e/egqyezb9p.css';
import '../../css/l/lyebbk3db.css';
import '../../css/n/nzvwhdb2q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="amgqiybcj"/><path class="w3a7pgbtx"/><path class="m2q7v_gjq"/><path class="rsris_b3l"/><path class="ctg14gobl"/><path class="romdoeucp"/><path class="egqyezb9p"/><path class="lyebbk3db"/><path class="nzvwhdb2q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:speedometer-max-broken"} {...others} />);
}

export default Component;
