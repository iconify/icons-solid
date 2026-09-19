import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y_j66ccof.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y_j66ccof"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:keyframe-hold-linear-in-filled"} {...others} />);
}

export default Component;
