import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/uvajnkgjf.css';
import '../../css/v/v1r-x4bqc.css';
import '../../css/n/n7e8zdwmr.css';
import '../../css/s/ssy2ybbtv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="uvajnkgjf"/><path class="v1r-x4bqc"/><circle class="n7e8zdwmr"/><path class="ssy2ybbtv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:delivery-broken"} {...others} />);
}

export default Component;
