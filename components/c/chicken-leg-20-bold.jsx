import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mxz4cubom.css';
import '../../css/i/iv8yz13mj.css';
import '../../css/l/lv8uq9bgl.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="mxz4cubom"/><path class="iv8yz13mj"/><path class="lv8uq9bgl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chicken-leg-20-bold"} {...others} />);
}

export default Component;
