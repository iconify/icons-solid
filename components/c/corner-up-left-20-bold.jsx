import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cs5ldor7z.css';
import '../../css/i/ins2hsbnh.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="cs5ldor7z"/><path class="ins2hsbnh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:corner-up-left-20-bold"} {...others} />);
}

export default Component;
