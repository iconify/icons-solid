import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/f-nfw68nc.css';
import '../../css/k/k6_m8bb3p.css';
import '../../css/r/rvg1ddc-m.css';
import '../../css/h/hi5e58bpt.css';
import '../../css/o/olcvaabye.css';
import '../../css/k/k3tmy3scv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="f-nfw68nc"/><path class="k6_m8bb3p"/><path class="rvg1ddc-m"/><path class="hi5e58bpt"/><path class="olcvaabye"/><path class="k3tmy3scv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:playlist-2-broken"} {...others} />);
}

export default Component;
