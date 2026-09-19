import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fdh9iubqd.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="fdh9iubqd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-solid:adjustments-horizontal"} {...others} />);
}

export default Component;
