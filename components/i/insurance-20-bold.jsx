import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gy0q0mjxc.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="gy0q0mjxc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:insurance-20-bold"} {...others} />);
}

export default Component;
