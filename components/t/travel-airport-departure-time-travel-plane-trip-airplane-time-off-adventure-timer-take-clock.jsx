import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mgrhv-byx.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="mgrhv-byx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:travel-airport-departure-time-travel-plane-trip-airplane-time-off-adventure-timer-take-clock"} {...others} />);
}

export default Component;
