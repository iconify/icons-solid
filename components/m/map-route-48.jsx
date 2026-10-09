import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/narq3v77u.css';
import '../../css/o/o8xu78b9h.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="narq3v77u"/><path class="o8xu78b9h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:map-route-48"} {...others} />);
}

export default Component;
