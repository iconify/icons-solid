import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r7txqyfjs.css';
import '../../css/p/px4lcrqbc.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="r7txqyfjs"/><path class="px4lcrqbc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pier-20-bold"} {...others} />);
}

export default Component;
