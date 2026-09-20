import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/by0_zkbwf.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="by0_zkbwf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"radix-icons:corner-bottom-right"} {...others} />);
}

export default Component;
