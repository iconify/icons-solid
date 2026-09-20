import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m1_y4b3pi.css';

const viewBox = {"width":21,"height":21};
const content = `<path class="m1_y4b3pi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:heart-rate"} {...others} />);
}

export default Component;
