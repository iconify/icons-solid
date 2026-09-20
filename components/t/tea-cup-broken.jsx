import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/ps0d2xk2r.css';
import '../../css/w/winbtub7u.css';
import '../../css/t/t0h-rybuv.css';
import '../../css/v/vjzov1blj.css';
import '../../css/n/nlopadc2z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ps0d2xk2r"/><path class="winbtub7u"/><path class="t0h-rybuv"/><path class="vjzov1blj"/><path class="nlopadc2z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:tea-cup-broken"} {...others} />);
}

export default Component;
