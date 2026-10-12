import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k42z9ru9b.css';
import '../../css/j/jwdu1gbfm.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="k42z9ru9b"/><path class="jwdu1gbfm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:rabbit-20"} {...others} />);
}

export default Component;
