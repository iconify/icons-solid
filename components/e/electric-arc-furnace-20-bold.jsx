import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/smlwvlmfy.css';
import '../../css/n/ntge0rvwd.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="smlwvlmfy"/><path class="ntge0rvwd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:electric-arc-furnace-20-bold"} {...others} />);
}

export default Component;
