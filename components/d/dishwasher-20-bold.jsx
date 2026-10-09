import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wmo-gj4um.css';
import '../../css/n/n-h74kx_a.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="wmo-gj4um"/><path class="n-h74kx_a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:dishwasher-20-bold"} {...others} />);
}

export default Component;
