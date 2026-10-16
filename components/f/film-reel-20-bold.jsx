import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g8xo_c6fy.css';
import '../../css/k/kwq58xm-v.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="g8xo_c6fy"/><path class="kwq58xm-v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:film-reel-20-bold"} {...others} />);
}

export default Component;
