import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ejx2y1bzf.css';
import '../../css/n/nyjp9ub1w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ejx2y1bzf"/><path class="nyjp9ub1w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cloud-waterdrop-bold-duotone"} {...others} />);
}

export default Component;
