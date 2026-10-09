import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w-j_9y_2k.css';
import '../../css/n/nsncu0byu.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="w-j_9y_2k"/><path class="nsncu0byu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:kettle-20-bold"} {...others} />);
}

export default Component;
