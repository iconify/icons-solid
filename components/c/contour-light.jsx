import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u0hwrl1oi.css';
import '../../css/q/qol0w3b_j.css';
import '../../css/w/wlowl6bhy.css';

const viewBox = {"width":360,"height":360};
const content = `<path class="u0hwrl1oi"/><path class="qol0w3b_j"/><path class="wlowl6bhy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:contour-light"} {...others} />);
}

export default Component;
