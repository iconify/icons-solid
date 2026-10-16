import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ukajkkbxj.css';
import '../../css/y/yep200xlu.css';
import '../../css/l/lem536b_l.css';
import '../../css/e/ee9mz4bdc.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ukajkkbxj"/><path class="yep200xlu"/><path class="lem536b_l"/><path class="ee9mz4bdc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:fertiliser-20"} {...others} />);
}

export default Component;
