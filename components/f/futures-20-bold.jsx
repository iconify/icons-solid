import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ngq5gwbhz.css';
import '../../css/z/z7g55rbun.css';
import '../../css/n/nk4pzob8v.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ngq5gwbhz"/><path class="z7g55rbun"/><path class="nk4pzob8v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:futures-20-bold"} {...others} />);
}

export default Component;
