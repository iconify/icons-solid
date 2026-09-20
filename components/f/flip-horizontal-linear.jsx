import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/ykjg-9bfc.css';
import '../../css/d/dgkn91bac.css';
import '../../css/a/aqdbg2upz.css';
import '../../css/k/k-kwsetci.css';
import '../../css/w/wcfaz7lnl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ykjg-9bfc"/><path class="dgkn91bac"/><path class="aqdbg2upz"/><path class="k-kwsetci"/><path class="wcfaz7lnl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:flip-horizontal-linear"} {...others} />);
}

export default Component;
