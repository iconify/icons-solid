import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mgj3sr5dm.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="mgj3sr5dm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:power-pole-flag-armless"} {...others} />);
}

export default Component;
