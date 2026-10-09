import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vwjkdv1oe.css';
import '../../css/c/crft-ebma.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="vwjkdv1oe"/><path class="crft-ebma"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:calendar-check-48-bold"} {...others} />);
}

export default Component;
