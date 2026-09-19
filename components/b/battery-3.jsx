import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l2w1ue3kd.css';

const viewBox = {"width":2304,"height":1280};
const content = `<path class="l2w1ue3kd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:battery-3"} {...others} />);
}

export default Component;
