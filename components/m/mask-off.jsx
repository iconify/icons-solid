import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jfp_8ibvf.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="jfp_8ibvf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"radix-icons:mask-off"} {...others} />);
}

export default Component;
