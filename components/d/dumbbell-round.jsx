import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nd8w5db4f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nd8w5db4f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:dumbbell-round"} {...others} />);
}

export default Component;
