import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x_46x3vmu.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="x_46x3vmu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:social-reddit"} {...others} />);
}

export default Component;
