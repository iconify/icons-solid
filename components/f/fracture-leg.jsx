import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/psxsivr7e.css';
import '../../css/g/gvyuxjbly.css';
import '../../css/w/wnh1kwvfw.css';
import '../../css/z/zdoby2b4a.css';
import '../../css/w/wzi8yybqh.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/c/c-zrgpb5l.css';
import '../../css/w/wqe5heb2o.css';
import '../../css/c/cq9jjkz5v.css';
import '../../css/f/f67hnrndh.css';
import '../../css/l/l8j579b8j.css';
import '../../css/s/so1gudbrn.css';
import '../../css/r/rr8l3taao.css';
import '../../css/x/x0gd96b0u.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="psxsivr7e"/><path class="gvyuxjbly"/><path class="wnh1kwvfw"/><path class="zdoby2b4a"/><path class="wzi8yybqh"/><g class="brzn_0bpr"><g class="c-zrgpb5l"><path class="wqe5heb2o"/><path class="cq9jjkz5v"/></g><path class="f67hnrndh"/><path class="l8j579b8j"/><path class="so1gudbrn"/><path class="rr8l3taao"/></g><path class="x0gd96b0u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:fracture-leg"} {...others} />);
}

export default Component;
