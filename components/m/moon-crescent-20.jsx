import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/suk0u9b4j.css';
import '../../css/o/o2vmq0bft.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="suk0u9b4j"/><path class="o2vmq0bft"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:moon-crescent-20"} {...others} />);
}

export default Component;
