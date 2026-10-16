import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xcs-irhnv.css';
import '../../css/z/zq0sxpb8q.css';
import '../../css/k/kr3y4cv8i.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="xcs-irhnv"/><path class="zq0sxpb8q"/><path class="kr3y4cv8i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:tow-truck-20-bold"} {...others} />);
}

export default Component;
