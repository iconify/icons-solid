import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u0vq58ann.css';
import '../../css/s/szrxxwb4q.css';
import '../../css/e/e4o8tz19x.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="u0vq58ann"/><path class="szrxxwb4q"/><path class="e4o8tz19x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:webcam-20-bold"} {...others} />);
}

export default Component;
