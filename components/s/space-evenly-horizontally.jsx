import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iy0s6l-yp.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="iy0s6l-yp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"radix-icons:space-evenly-horizontally"} {...others} />);
}

export default Component;
