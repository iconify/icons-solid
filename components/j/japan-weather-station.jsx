import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f2lgv1bzn.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="f2lgv1bzn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:japan-weather-station"} {...others} />);
}

export default Component;
