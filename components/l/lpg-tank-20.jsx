import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y7ro5gmkv.css';
import '../../css/k/kbep-sbgp.css';
import '../../css/k/km0u10_mc.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="y7ro5gmkv"/><path class="kbep-sbgp"/><path class="km0u10_mc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:lpg-tank-20"} {...others} />);
}

export default Component;
