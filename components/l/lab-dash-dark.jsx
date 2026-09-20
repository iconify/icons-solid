import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n6p3t0bwu.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="n6p3t0bwu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:lab-dash-dark"} {...others} />);
}

export default Component;
