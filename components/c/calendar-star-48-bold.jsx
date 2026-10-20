import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vwjkdv1oe.css';
import '../../css/b/b-dgc6bvi.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="vwjkdv1oe"/><path class="b-dgc6bvi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:calendar-star-48-bold"} {...others} />);
}

export default Component;
