import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/ca1-23bvb.css';
import '../../css/t/tq8fecpng.css';
import '../../css/p/p1wvpacyv.css';
import '../../css/z/zk0bkcc_l.css';
import '../../css/x/x3r2fd2qu.css';
import '../../css/y/yb-_uacfc.css';
import '../../css/q/q3y_j70de.css';
import '../../css/p/pi0c0oi1b.css';
import '../../css/m/mb3cghbfb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ca1-23bvb"/><path class="tq8fecpng"/><path class="p1wvpacyv"/><path class="zk0bkcc_l"/><path class="x3r2fd2qu"/><path class="yb-_uacfc"/><path class="q3y_j70de"/><path class="pi0c0oi1b"/><path class="mb3cghbfb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:credit-card-smartphone-exchange"} {...others} />);
}

export default Component;
