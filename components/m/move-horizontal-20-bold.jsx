import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ne19vg9-n.css';
import '../../css/n/n0aw6mhri.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ne19vg9-n"/><path class="n0aw6mhri"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:move-horizontal-20-bold"} {...others} />);
}

export default Component;
