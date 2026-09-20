import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d71j6bs8z.css';

const viewBox = {"width":21.065,"height":31.99,"left":0.005};
const content = `<path class="d71j6bs8z ingov-blue"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:inprs"} {...others} />);
}

export default Component;
