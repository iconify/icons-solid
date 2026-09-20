import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hq1bfqbrr.css';
import '../../css/o/ob7e8iy5c.css';
import '../../css/n/n52y3eshu.css';
import '../../css/p/pvsnbrs_x.css';
import '../../css/w/wo9trj7xa.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/e/e73pmz8yp.css';
import '../../css/c/c7rz63cni.css';
import '../../css/c/co7oj7zlk.css';
import '../../css/j/jilcj_bkl.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="hq1bfqbrr"><path class="ob7e8iy5c"/><circle class="n52y3eshu"/></g><path class="pvsnbrs_x"/><path class="wo9trj7xa"/><g class="brzn_0bpr"><path class="e73pmz8yp"/><circle class="c7rz63cni"/><path class="co7oj7zlk"/><path class="jilcj_bkl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:woman-climbing-light-skin-tone"} {...others} />);
}

export default Component;
