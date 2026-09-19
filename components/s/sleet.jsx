import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rclnhcb_b.css';
import '../../css/z/z9u1ekeoz.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="rclnhcb_b"/><path class="z9u1ekeoz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:sleet"} {...others} />);
}

export default Component;
