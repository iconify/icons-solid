import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i_w6ecbck.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i_w6ecbck"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-outline:wrench-screwdriver"} {...others} />);
}

export default Component;
