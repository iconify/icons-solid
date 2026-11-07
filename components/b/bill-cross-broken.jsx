import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zvakluojt.css';
import '../../css/b/bptzo87jl.css';
import '../../css/o/opk43_ukr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="zvakluojt"/><path class="bptzo87jl"/><path class="opk43_ukr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bill-cross-broken"} {...others} />);
}

export default Component;
