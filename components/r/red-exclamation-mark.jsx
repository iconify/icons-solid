import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/ptrq_tz8w.css';
import '../../css/w/wr4q_kbqj.css';
import '../../css/n/nng8k44hw.css';
import '../../css/y/ytp-e7bdz.css';
import '../../css/j/j_3kvjgwq.css';
import '../../css/b/b39f13kst.css';

const viewBox = {"width":512,"height":512};
const content = `<defs><radialGradient id="SVGbhZ8ieqd" cx="101.2" cy="56" r="102.1" gradientUnits="userSpaceOnUse"><stop offset="0" class="ptrq_tz8w"/><stop offset=".85" class="wr4q_kbqj"/><stop offset="1" class="wr4q_kbqj"/></radialGradient></defs><path class="nng8k44hw"/><path fill="url(#SVGbhZ8ieqd)" transform="matrix(2.7 0 0 2.7 -18.389 -11.519)" class="ytp-e7bdz"/><path class="j_3kvjgwq"/><path class="b39f13kst"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"xero-emoji:red-exclamation-mark"} {...others} />);
}

export default Component;
