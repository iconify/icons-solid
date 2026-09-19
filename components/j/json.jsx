import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vc--wpv5i.css';
import '../../css/u/uzpzozbhu.css';
import '../../css/x/x6-jdsuvt.css';

const viewBox = {"width":128,"height":128};
const content = `<linearGradient id="SVGxaIOibUO" x1="-670.564" x2="-583.105" y1="-280.831" y2="-368.306" gradientTransform="matrix(.9988 0 0 -.9987 689.011 -259.008)" gradientUnits="userSpaceOnUse"><stop offset="0"/><stop offset="1" class="vc--wpv5i"/></linearGradient><path fill="url(#SVGxaIOibUO)" clip-rule="evenodd" class="uzpzozbhu"/><linearGradient id="SVGJMvdwcgP" x1="-579.148" x2="-666.607" y1="-364.34" y2="-276.873" gradientTransform="matrix(.9988 0 0 -.9987 689.011 -259.008)" gradientUnits="userSpaceOnUse"><stop offset="0"/><stop offset="1" class="vc--wpv5i"/></linearGradient><path fill="url(#SVGJMvdwcgP)" clip-rule="evenodd" class="x6-jdsuvt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:json"} {...others} />);
}

export default Component;
