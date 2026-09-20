import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w8w2j4bvh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w8w2j4bvh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:webhook-line"} {...others} />);
}

export default Component;
