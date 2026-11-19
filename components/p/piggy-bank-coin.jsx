import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ifgbisb2q.css';
import '../../css/v/vkgpuabln.css';
import '../../css/a/aiynaebqv.css';
import '../../css/o/o_w387zud.css';
import '../../css/q/qngonabpi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ifgbisb2q"/><path class="vkgpuabln"/><path class="aiynaebqv"/><circle class="o_w387zud"/><path class="qngonabpi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:piggy-bank-coin"} {...others} />);
}

export default Component;
