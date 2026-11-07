import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xogjh4bhh.css';
import '../../css/t/taauto6yu.css';
import '../../css/s/shu3xdl9q.css';
import '../../css/g/gp0egaclj.css';
import '../../css/a/a0u0egbsz.css';
import '../../css/g/gq6_obb9a.css';
import '../../css/s/s0qi5sbmn.css';
import '../../css/t/txyb0r8kh.css';
import '../../css/p/ppbot7hht.css';
import '../../css/e/e-hxpcc7k.css';
import '../../css/k/kocz27bxb.css';
import '../../css/c/cn1xlvb1s.css';
import '../../css/a/a0k0xfo0n.css';
import '../../css/i/i-ok3bfpn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="xogjh4bhh"/><path class="taauto6yu"/><circle class="shu3xdl9q"/><circle class="gp0egaclj"/><path class="a0u0egbsz"/><path class="gq6_obb9a"/><path class="s0qi5sbmn"/><path class="txyb0r8kh"/><path class="ppbot7hht"/><path class="e-hxpcc7k"/><path class="kocz27bxb"/><path class="cn1xlvb1s"/><path class="a0k0xfo0n"/><path class="i-ok3bfpn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:donut-line-duotone"} {...others} />);
}

export default Component;
