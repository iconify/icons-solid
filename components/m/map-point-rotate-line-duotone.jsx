import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/fiiy06v1a.css';
import '../../css/x/x_-vy9bff.css';
import '../../css/s/src5g-5zv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="fiiy06v1a"/><path class="x_-vy9bff"/><path class="src5g-5zv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:map-point-rotate-line-duotone"} {...others} />);
}

export default Component;
