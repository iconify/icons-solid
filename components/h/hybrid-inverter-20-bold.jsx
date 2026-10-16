import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vqy4zebrn.css';
import '../../css/s/sv9da_bvv.css';
import '../../css/o/oybwn4bef.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="vqy4zebrn"/><path class="sv9da_bvv"/><path class="oybwn4bef"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hybrid-inverter-20-bold"} {...others} />);
}

export default Component;
