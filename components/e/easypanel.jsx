import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tzfasvb_b.css';
import '../../css/p/p6fgs4blu.css';
import '../../css/j/jrtb88b6m.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVG0TSqzboP" x1="395.338" x2="116.737" y1="293.742" y2="776.302" gradientTransform="translate(0 -279)" gradientUnits="userSpaceOnUse"><stop offset="0" class="tzfasvb_b"/><stop offset="1" class="p6fgs4blu"/></linearGradient><path fill="url(#SVG0TSqzboP)" class="jrtb88b6m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:easypanel"} {...others} />);
}

export default Component;
