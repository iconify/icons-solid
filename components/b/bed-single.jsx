import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/voj3xbb6o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="voj3xbb6o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:bed-single"} {...others} />);
}

export default Component;
