import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ckjs4eb9e.css';

const viewBox = {"width":448,"height":512};
const content = `<path class="ckjs4eb9e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"academicons:africarxiv-square"} {...others} />);
}

export default Component;
