import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dp6xkbjgw.css';
import '../../css/s/scd45hs3y.css';
import '../../css/c/cdw17kolu.css';
import '../../css/v/v9u8nhb5n.css';
import '../../css/x/x8rkn-b2l.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="dp6xkbjgw"/><path class="scd45hs3y"/><path class="cdw17kolu"/><linearGradient id="SVGxXcfKbFN" x1="53.823" x2="458.177" y1="60.653" y2="60.653" gradientUnits="userSpaceOnUse"><stop offset="0"/><stop offset="1" class="v9u8nhb5n"/></linearGradient><path fill="url(#SVGxXcfKbFN)" class="x8rkn-b2l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:anycable-dark"} {...others} />);
}

export default Component;
