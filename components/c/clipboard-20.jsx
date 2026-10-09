import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j3i5l3b6q.css';
import '../../css/v/v8kul2btm.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="j3i5l3b6q"/><path class="v8kul2btm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:clipboard-20"} {...others} />);
}

export default Component;
