import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g90kx7ply.css';

const viewBox = {"width":640,"height":640};
const content = `<path class="g90kx7ply"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa7-solid:hands-holding-circle"} {...others} />);
}

export default Component;
