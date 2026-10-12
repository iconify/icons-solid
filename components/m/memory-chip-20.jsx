import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j-alhcbxd.css';
import '../../css/i/ifa3sbbtd.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="j-alhcbxd"/><path class="ifa3sbbtd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:memory-chip-20"} {...others} />);
}

export default Component;
