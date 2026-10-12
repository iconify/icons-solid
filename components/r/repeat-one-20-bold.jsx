import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ixv82_hid.css';
import '../../css/e/e6-p1ybyd.css';
import '../../css/b/bxy1g4b3o.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ixv82_hid"/><path class="e6-p1ybyd"/><path class="bxy1g4b3o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:repeat-one-20-bold"} {...others} />);
}

export default Component;
