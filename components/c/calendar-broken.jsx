import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/tv6qiybum.css';
import '../../css/y/ytwl2ebtc.css';
import '../../css/r/rmwzjebkv.css';
import '../../css/u/ue-h37-nb.css';
import '../../css/s/s-k_z47ah.css';
import '../../css/x/x4qttyz6i.css';
import '../../css/o/ox982rbym.css';
import '../../css/z/zihrmabze.css';
import '../../css/t/tvuddlb5o.css';
import '../../css/c/clqtkrb8d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="tv6qiybum"/><path class="ytwl2ebtc"/><path class="rmwzjebkv"/><path class="ue-h37-nb"/><path class="s-k_z47ah"/><path class="x4qttyz6i"/><path class="ox982rbym"/><path class="zihrmabze"/><path class="tvuddlb5o"/><path class="clqtkrb8d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:calendar-broken"} {...others} />);
}

export default Component;
