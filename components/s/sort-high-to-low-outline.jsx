import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y7-sevcfd.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="y7-sevcfd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:sort-high-to-low-outline"} {...others} />);
}

export default Component;
