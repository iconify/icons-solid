import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/u4_s0wb5m.css';
import '../../css/b/bj_g9yogd.css';
import '../../css/u/u62sohwld.css';
import '../../css/q/q9xtwf46y.css';
import '../../css/g/gjxuf9bws.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="u4_s0wb5m"/><path class="bj_g9yogd"/><path class="u62sohwld"/><path class="q9xtwf46y"/><path class="gjxuf9bws"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:pin-list-broken"} {...others} />);
}

export default Component;
