import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tn3kjzbic.css';
import '../../css/v/v9nux6bhi.css';
import '../../css/s/shy242ktc.css';
import '../../css/w/whslaccyj.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="tn3kjzbic"/><path class="v9nux6bhi"/><path class="shy242ktc"/><path class="whslaccyj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:gantry-crane-20"} {...others} />);
}

export default Component;
