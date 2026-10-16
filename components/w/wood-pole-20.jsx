import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bj75j-log.css';
import '../../css/f/fdqwsub7z.css';
import '../../css/w/w58xql4qz.css';
import '../../css/y/y_35ybrup.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="bj75j-log"/><path class="fdqwsub7z"/><path class="w58xql4qz"/><path class="y_35ybrup"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wood-pole-20"} {...others} />);
}

export default Component;
