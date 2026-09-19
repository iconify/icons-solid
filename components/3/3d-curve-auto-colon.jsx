import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tf3_fw_kp.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="tf3_fw_kp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:3d-curve-auto-colon"} {...others} />);
}

export default Component;
