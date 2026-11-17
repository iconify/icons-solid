import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zq8y74bvn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zq8y74bvn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:chevrons-from-axis-horizontal"} {...others} />);
}

export default Component;
