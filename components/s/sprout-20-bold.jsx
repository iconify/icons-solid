import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kecam2bme.css';
import '../../css/d/duw87ybvv.css';
import '../../css/z/zyyp67_ey.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="kecam2bme"/><path class="duw87ybvv"/><path class="zyyp67_ey"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:sprout-20-bold"} {...others} />);
}

export default Component;
