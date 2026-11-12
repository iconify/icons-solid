import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sll_zg-uo.css';
import '../../css/v/v9u8nhb5n.css';
import '../../css/y/yq54hro4p.css';
import '../../css/c/ce2ty7muy.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGwKQKVbyU" x1="63.4" x2="420.5" y1="463" y2="105.9" gradientUnits="userSpaceOnUse"><stop offset="0" class="sll_zg-uo"/><stop offset="1" class="v9u8nhb5n"/></linearGradient><path fill="url(#SVGwKQKVbyU)" class="yq54hro4p"/><path class="ce2ty7muy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:youtrack-dark"} {...others} />);
}

export default Component;
