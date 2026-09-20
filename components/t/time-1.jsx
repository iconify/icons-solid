import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nnwl7-b_m.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="nnwl7-b_m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"subway:time-1"} {...others} />);
}

export default Component;
