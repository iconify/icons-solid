import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v0i_05b_b.css';
import '../../css/m/mp3j7pbyx.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="v0i_05b_b"/><path class="mp3j7pbyx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:meter-cabinet-20-bold"} {...others} />);
}

export default Component;
