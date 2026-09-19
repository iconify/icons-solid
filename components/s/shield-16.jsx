import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fxkagvo3p.css';
import '../../css/o/ol7cejbxg.css';
import '../../css/u/uw28vhb1n.css';
import '../../css/f/fn0mbo18z.css';
import '../../css/g/gsug0sx0f.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="ft5dv1b6b"><path fill="url(#SVGbHn6MeQb)" class="fxkagvo3p"/><defs><radialGradient id="SVGbHn6MeQb" cx="0" cy="0" r="1" gradientTransform="rotate(56.554 3.95 -3.238)scale(27.864 23.943)" gradientUnits="userSpaceOnUse"><stop offset=".338" class="ol7cejbxg"/><stop offset=".529" class="uw28vhb1n"/><stop offset=".682" class="fn0mbo18z"/><stop offset=".861" class="gsug0sx0f"/></radialGradient></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-color:shield-16"} {...others} />);
}

export default Component;
