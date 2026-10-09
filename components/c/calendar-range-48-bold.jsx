import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vwjkdv1oe.css';
import '../../css/c/ccoa7kjog.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="vwjkdv1oe"/><path class="ccoa7kjog"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:calendar-range-48-bold"} {...others} />);
}

export default Component;
