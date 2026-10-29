import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a-24gnh2l.css';
import '../../css/w/wfww9btsg.css';
import '../../css/c/cemh59tby.css';
import '../../css/o/oydb5pr6b.css';
import '../../css/x/xffrv2fub.css';
import '../../css/w/w3nzejbrf.css';
import '../../css/f/fg349b9qk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a-24gnh2l wm-shadow"/><path class="wfww9btsg"/><path class="cemh59tby"/><path class="oydb5pr6b"/><path class="xffrv2fub"/><path class="w3nzejbrf wm-shine"/><path class="fg349b9qk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:chevron-down"} {...others} />);
}

export default Component;
