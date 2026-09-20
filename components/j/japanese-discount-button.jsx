import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z1sjyhbzn.css';
import '../../css/r/rpvb-o6bq.css';
import '../../css/t/tchtkszzp.css';
import '../../css/y/yeudhmita.css';
import '../../css/w/w5t03mbpz.css';
import '../../css/m/msfa36fbi.css';
import '../../css/k/kxzfwkbvs.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="z1sjyhbzn"/><g class="rpvb-o6bq"><path clip-rule="evenodd" transform="translate(-3.13 -3.172)scale(1.087) matrix(.2573 0 0 .2691 -2.556 -94.16)" class="tchtkszzp"/><path clip-rule="evenodd" class="yeudhmita"/><path clip-rule="evenodd" transform="translate(-3.13 -3.172)scale(1.087) matrix(.2515 0 0 .2455 -1.283 -76.11)" class="w5t03mbpz"/><path clip-rule="evenodd" class="msfa36fbi"/><path class="kxzfwkbvs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:japanese-discount-button"} {...others} />);
}

export default Component;
