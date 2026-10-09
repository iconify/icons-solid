import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tzzrqibpu.css';
import '../../css/i/ilum5ccux.css';
import '../../css/r/rtzhn3bfz.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="tzzrqibpu"/><path class="ilum5ccux"/><path class="rtzhn3bfz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:paint-bucket-20"} {...others} />);
}

export default Component;
