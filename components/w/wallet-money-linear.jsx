import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/ohsv2hiuv.css';
import '../../css/k/kknuolbeb.css';
import '../../css/s/s56xsmbuu.css';
import '../../css/l/lx3zoyb_j.css';
import '../../css/v/voq45tm1g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ohsv2hiuv"/><path class="kknuolbeb"/><path class="s56xsmbuu"/><path class="lx3zoyb_j"/><path class="voq45tm1g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:wallet-money-linear"} {...others} />);
}

export default Component;
