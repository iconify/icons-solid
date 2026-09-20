import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nv_vv6bcm.css';
import '../../css/f/fe1xdgb8o.css';
import '../../css/n/nxo_13i2d.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="nv_vv6bcm"><path class="fe1xdgb8o"/><path class="nxo_13i2d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:arrow-path-clock-20-solid"} {...others} />);
}

export default Component;
