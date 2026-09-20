import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/orhcqgsjm.css';
import '../../css/x/xfb99bczv.css';
import '../../css/y/ytq4ahb7n.css';
import '../../css/a/ab-qp_cbw.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/z/zrlqxvb3y.css';
import '../../css/e/ese6uxbed.css';
import '../../css/m/mb5zwmuse.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="orhcqgsjm"/><path class="xfb99bczv"/><path class="ytq4ahb7n"/><path class="ab-qp_cbw"/><g class="brzn_0bpr"><path class="zrlqxvb3y"/><path class="ese6uxbed"/><path class="mb5zwmuse"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:heart-on-fire"} {...others} />);
}

export default Component;
