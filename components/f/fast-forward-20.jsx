import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a-7yzwbmb.css';
import '../../css/n/n0tshoxcj.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="a-7yzwbmb"/><path class="n0tshoxcj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:fast-forward-20"} {...others} />);
}

export default Component;
