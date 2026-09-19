import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oy3iztbmk.css';
import '../../css/s/sulj6_b9o.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="oy3iztbmk"/><path class="sulj6_b9o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:telescope-outline"} {...others} />);
}

export default Component;
