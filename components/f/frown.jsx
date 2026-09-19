import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gste0ub5p.css';
import '../../css/w/woby12tkh.css';
import '../../css/y/ytzui8ajc.css';
import '../../css/n/n6sq0eqhg.css';
import '../../css/a/al50jfutp.css';
import '../../css/y/y2wjn-nrs.css';
import '../../css/s/sz2l2j7pv.css';
import '../../css/t/t1mlfclzz.css';
import '../../css/l/lynpc0ist.css';
import '../../css/w/w1p50fuxe.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="gste0ub5p"/><path class="woby12tkh"/><path class="ytzui8ajc"/><path class="n6sq0eqhg"/><path class="al50jfutp"/><path class="y2wjn-nrs"/><path class="sz2l2j7pv"/><path class="t1mlfclzz"/><path class="lynpc0ist"/><path class="w1p50fuxe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:frown"} {...others} />);
}

export default Component;
