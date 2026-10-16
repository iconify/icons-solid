import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ncmcqbb8g.css';
import '../../css/i/ixw6t5b1b.css';
import '../../css/i/iu8op3j7o.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ncmcqbb8g"/><path class="ixw6t5b1b"/><path class="iu8op3j7o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:energy-island-20"} {...others} />);
}

export default Component;
