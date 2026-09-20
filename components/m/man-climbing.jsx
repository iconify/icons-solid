import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x4u8pbwjc.css';
import '../../css/o/ob7e8iy5c.css';
import '../../css/n/n52y3eshu.css';
import '../../css/p/pvsnbrs_x.css';
import '../../css/w/wo9trj7xa.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/c/cckgeb1yf.css';
import '../../css/c/c7rz63cni.css';
import '../../css/c/co7oj7zlk.css';
import '../../css/w/wsjdo2jmv.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="x4u8pbwjc"><path class="ob7e8iy5c"/><circle class="n52y3eshu"/></g><path class="pvsnbrs_x"/><path class="wo9trj7xa"/><g class="brzn_0bpr"><path class="cckgeb1yf"/><circle class="c7rz63cni"/><path class="co7oj7zlk"/><path class="wsjdo2jmv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:man-climbing"} {...others} />);
}

export default Component;
