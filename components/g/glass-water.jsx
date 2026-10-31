import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/v/v6j7-nbvx.css';
import '../../css/l/lh5-a8brr.css';
import '../../css/n/n5gk_ubvh.css';
import '../../css/q/qf___5dnj.css';
import '../../css/p/pawg8ccvo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="v6j7-nbvx wm-shadow"/><path class="lh5-a8brr wm-shadow"/><path class="n5gk_ubvh"/><path class="qf___5dnj"/><path class="pawg8ccvo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:glass-water"} {...others} />);
}

export default Component;
