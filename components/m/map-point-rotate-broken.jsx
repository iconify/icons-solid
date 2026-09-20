import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/x_-vy9bff.css';
import '../../css/s/src5g-5zv.css';
import '../../css/p/pbkmeu61n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="x_-vy9bff"/><path class="src5g-5zv"/><path class="pbkmeu61n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:map-point-rotate-broken"} {...others} />);
}

export default Component;
