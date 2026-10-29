import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kp-3gxbof.css';
import '../../css/g/gg204_b7r.css';
import '../../css/t/txb8xjh-v.css';
import '../../css/t/tld3d28kx.css';
import '../../css/h/hp62lcexr.css';
import '../../css/r/rxxgybqfh.css';
import '../../css/f/fbr6rhl0b.css';
import '../../css/v/vo7pfrn2l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kp-3gxbof wm-shadow"/><path class="gg204_b7r wm-k"/><path class="txb8xjh-v wm-k"/><path class="tld3d28kx wm-k"/><path class="hp62lcexr wm-k"/><path class="rxxgybqfh wm-shine"/><path class="fbr6rhl0b wm-k"/><path class="vo7pfrn2l wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:message-square-code"} {...others} />);
}

export default Component;
