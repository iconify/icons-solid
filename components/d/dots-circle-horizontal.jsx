import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/naj-5-b_a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="naj-5-b_a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-outline:dots-circle-horizontal"} {...others} />);
}

export default Component;
