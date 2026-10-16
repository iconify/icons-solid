import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i00v-b3kp.css';
import '../../css/c/cj81ctblr.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="i00v-b3kp"/><path class="cj81ctblr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:panel-left-close-20-bold"} {...others} />);
}

export default Component;
