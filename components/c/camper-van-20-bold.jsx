import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xxzl1bc0g.css';
import '../../css/e/e6or4bcld.css';
import '../../css/a/a2_nmqdnh.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="xxzl1bc0g"/><path class="e6or4bcld"/><path class="a2_nmqdnh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:camper-van-20-bold"} {...others} />);
}

export default Component;
