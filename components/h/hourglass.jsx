import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ij2908egb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ij2908egb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:hourglass"} {...others} />);
}

export default Component;
