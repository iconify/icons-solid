import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/d/dylqz1b1y.css';
import '../../css/p/pw2lrsbgt.css';
import '../../css/e/e8dqfebrf.css';
import '../../css/v/vydv_p53t.css';
import '../../css/g/g_idgjv2a.css';
import '../../css/f/fdslo7d3y.css';
import '../../css/e/e1nf_jboz.css';
import '../../css/q/qi1pidchv.css';
import '../../css/e/e-lg5sd0w.css';
import '../../css/y/yngjwbcke.css';
import '../../css/o/oqgnijpwj.css';
import '../../css/w/wj3oljmlh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="dylqz1b1y"/><path class="pw2lrsbgt"/><path class="e8dqfebrf"/><path class="vydv_p53t"/><path class="g_idgjv2a"/><path class="fdslo7d3y"/><path class="e1nf_jboz"/><path class="qi1pidchv"/><path class="e-lg5sd0w"/><path class="yngjwbcke"/><path class="oqgnijpwj"/><path class="wj3oljmlh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:loading-one"} {...others} />);
}

export default Component;
