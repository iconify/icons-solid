import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/g/g0ccqzb9w.css';
import '../../css/w/w1fhcebii.css';
import '../../css/x/xeddqab8p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="g0ccqzb9w wm-shadow"/><path class="w1fhcebii wm-shadow"/><path class="xeddqab8p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:wifi-low"} {...others} />);
}

export default Component;
