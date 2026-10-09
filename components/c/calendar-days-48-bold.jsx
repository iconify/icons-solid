import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vwjkdv1oe.css';
import '../../css/h/h0rijs3in.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="vwjkdv1oe"/><path class="h0rijs3in"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:calendar-days-48-bold"} {...others} />);
}

export default Component;
