import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/gro69lbqj.css';
import '../../css/b/bj_g9yogd.css';
import '../../css/u/u62sohwld.css';
import '../../css/q/q9xtwf46y.css';
import '../../css/y/ym8tjibvp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="gro69lbqj"/><path class="bj_g9yogd"/><path class="u62sohwld"/><path class="q9xtwf46y"/><path class="ym8tjibvp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:pin-list-linear"} {...others} />);
}

export default Component;
