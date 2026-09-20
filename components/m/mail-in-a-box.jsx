import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x60w_shwp.css';
import '../../css/w/wm47bvb3b.css';
import '../../css/e/e4qeopbnh.css';
import '../../css/v/v1dk5sb8s.css';
import '../../css/d/duapqybne.css';
import '../../css/l/lnbegp2la.css';
import '../../css/b/bj8uwrety.css';
import '../../css/m/mg6_l4q7a.css';
import '../../css/m/mbjghabjh.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="x60w_shwp"/><path class="wm47bvb3b"/><path class="e4qeopbnh"/><path class="v1dk5sb8s"/><path class="duapqybne"/><path class="lnbegp2la"/><path class="bj8uwrety"/><path class="mg6_l4q7a"/><path class="mbjghabjh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:mail-in-a-box"} {...others} />);
}

export default Component;
