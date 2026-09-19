import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7-k3_nsq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j7-k3_nsq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:car-battery-filled"} {...others} />);
}

export default Component;
