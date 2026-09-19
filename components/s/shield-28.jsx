import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cart39bkd.css';
import '../../css/o/ol7cejbxg.css';
import '../../css/u/uw28vhb1n.css';
import '../../css/f/fn0mbo18z.css';
import '../../css/g/gsug0sx0f.css';

const viewBox = {"width":28,"height":28};
const content = `<g class="ft5dv1b6b"><path fill="url(#SVG0UEJneqp)" class="cart39bkd"/><defs><radialGradient id="SVG0UEJneqp" cx="0" cy="0" r="1" gradientTransform="rotate(54 8.463 -11.286)scale(57.4728 51.0658)" gradientUnits="userSpaceOnUse"><stop offset=".338" class="ol7cejbxg"/><stop offset=".529" class="uw28vhb1n"/><stop offset=".682" class="fn0mbo18z"/><stop offset=".861" class="gsug0sx0f"/></radialGradient></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-color:shield-28"} {...others} />);
}

export default Component;
