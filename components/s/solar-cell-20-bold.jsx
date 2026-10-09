import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k9svkd5iy.css';
import '../../css/m/m5wg2ub_n.css';
import '../../css/l/lgigiqbja.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="k9svkd5iy"/><path class="m5wg2ub_n"/><path class="lgigiqbja"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:solar-cell-20-bold"} {...others} />);
}

export default Component;
