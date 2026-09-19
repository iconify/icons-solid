import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/v/vqi7hhbac.css';
import '../../css/z/zhuynbbbv.css';
import '../../css/y/yra6_ccng.css';
import '../../css/u/ums0lf1sd.css';
import '../../css/s/srpi4abui.css';
import '../../css/y/yfqunmbsq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><rect class="vqi7hhbac"/><path class="zhuynbbbv"/><path class="yra6_ccng"/><path class="ums0lf1sd"/><path class="srpi4abui"/><path class="yfqunmbsq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:solar-energy"} {...others} />);
}

export default Component;
