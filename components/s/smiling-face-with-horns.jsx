import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jsgpay9lb.css';
import '../../css/n/ntveefwhq.css';
import '../../css/h/huuajhmrh.css';
import '../../css/c/cd7zj2mlo.css';
import '../../css/p/plt0nhugm.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="jsgpay9lb"/><path class="ntveefwhq"/><circle class="huuajhmrh"/><path class="cd7zj2mlo"/><path class="plt0nhugm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:smiling-face-with-horns"} {...others} />);
}

export default Component;
