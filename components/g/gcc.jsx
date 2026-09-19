import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g_mhv-rsu.css';
import '../../css/d/d_it9lbee.css';
import '../../css/z/zj0u1bcaj.css';
import '../../css/b/bwc2bbi1v.css';
import '../../css/s/si1lanbzm.css';
import '../../css/b/b622qub7n.css';
import '../../css/u/uqdlygb6q.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="g_mhv-rsu"/><path class="d_it9lbee"/><path class="zj0u1bcaj"/><path class="bwc2bbi1v"/><path class="si1lanbzm"/><path class="b622qub7n"/><path class="uqdlygb6q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:gcc"} {...others} />);
}

export default Component;
