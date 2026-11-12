import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pqhtbbnqp.css';
import '../../css/c/ctgj48bid.css';
import '../../css/e/e4qeopbnh.css';
import '../../css/v/v1dk5sb8s.css';
import '../../css/d/duapqybne.css';
import '../../css/l/lnbegp2la.css';
import '../../css/b/bj8uwrety.css';
import '../../css/k/kn9qikwuv.css';
import '../../css/f/feda3_s8s.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pqhtbbnqp"/><path class="ctgj48bid"/><path class="e4qeopbnh"/><path class="v1dk5sb8s"/><path class="duapqybne"/><path class="lnbegp2la"/><path class="bj8uwrety"/><path class="kn9qikwuv"/><path class="feda3_s8s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:mail-in-a-box"} {...others} />);
}

export default Component;
