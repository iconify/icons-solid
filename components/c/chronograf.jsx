import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/exqc7kwxs.css';
import '../../css/v/vsr0hw0fo.css';
import '../../css/r/rrvqfdczg.css';

const viewBox = {"width":140,"height":140};
const content = `<linearGradient id="SVGKQj6QcUj" x1="63.166" x2="107.666" y1="62.628" y2="110.628" gradientUnits="userSpaceOnUse"><stop offset="0" class="exqc7kwxs"/><stop offset="1" class="vsr0hw0fo"/></linearGradient><path fill="url(#SVGKQj6QcUj)" class="rrvqfdczg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:chronograf"} {...others} />);
}

export default Component;
