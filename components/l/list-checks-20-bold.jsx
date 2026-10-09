import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vjw_5r1kp.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="vjw_5r1kp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:list-checks-20-bold"} {...others} />);
}

export default Component;
