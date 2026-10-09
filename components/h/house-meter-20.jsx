import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p7juawdew.css';
import '../../css/d/d2axpfabm.css';
import '../../css/m/mmo1ocbhg.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="p7juawdew"/><path class="d2axpfabm"/><path class="mmo1ocbhg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:house-meter-20"} {...others} />);
}

export default Component;
