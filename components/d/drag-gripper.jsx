import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ir_fjwbhu.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="ir_fjwbhu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:drag-gripper"} {...others} />);
}

export default Component;
