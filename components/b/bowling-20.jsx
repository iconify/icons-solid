import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uzq6l3b3u.css';
import '../../css/d/dfcj5z_lc.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="uzq6l3b3u"/><path class="dfcj5z_lc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bowling-20"} {...others} />);
}

export default Component;
