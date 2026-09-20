import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/cpbrkgbvb.css';
import '../../css/y/ytwl2ebtc.css';
import '../../css/r/rmwzjebkv.css';
import '../../css/e/ez1x61b2a.css';
import '../../css/p/po0yeu5hs.css';
import '../../css/u/ue-h37-nb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="cpbrkgbvb"/><path class="ytwl2ebtc"/><path class="rmwzjebkv"/><circle class="ez1x61b2a"/><path class="po0yeu5hs"/><path class="ue-h37-nb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:calendar-search-broken"} {...others} />);
}

export default Component;
