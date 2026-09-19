import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ujzwsr14u.css';
import '../../css/u/uxhd56ztt.css';
import '../../css/w/wfpfh2pvo.css';
import '../../css/x/x1jbyemsn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ujzwsr14u"/><path class="uxhd56ztt"/><path class="wfpfh2pvo"/><path class="x1jbyemsn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-coin-stack"} {...others} />);
}

export default Component;
