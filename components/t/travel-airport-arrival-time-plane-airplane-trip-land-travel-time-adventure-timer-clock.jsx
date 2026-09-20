import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hwcwarblc.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="hwcwarblc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:travel-airport-arrival-time-plane-airplane-trip-land-travel-time-adventure-timer-clock"} {...others} />);
}

export default Component;
