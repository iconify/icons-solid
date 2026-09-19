import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/keekzqquq.css';
import '../../css/x/xhp8subet.css';
import '../../css/j/j3bdxnbqp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="keekzqquq"/><path class="xhp8subet"/><path class="j3bdxnbqp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:gamepad-01"} {...others} />);
}

export default Component;
