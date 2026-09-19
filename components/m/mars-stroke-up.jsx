import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j5fy5w_1n.css';

const viewBox = {"width":320,"height":512};
const content = `<path class="j5fy5w_1n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:mars-stroke-up"} {...others} />);
}

export default Component;
