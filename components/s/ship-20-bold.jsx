import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/temu-lr3v.css';
import '../../css/n/nbj6_5v5v.css';
import '../../css/t/t6587jiay.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="temu-lr3v"/><path class="nbj6_5v5v"/><path class="t6587jiay"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ship-20-bold"} {...others} />);
}

export default Component;
