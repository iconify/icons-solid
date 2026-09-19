import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e_f_gsbag.css';
import '../../css/v/v22w14b1n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e_f_gsbag"/><path class="v22w14b1n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:school-bus"} {...others} />);
}

export default Component;
