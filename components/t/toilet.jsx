import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/silqywcvh.css';

const viewBox = {"width":384,"height":512};
const content = `<path class="silqywcvh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:toilet"} {...others} />);
}

export default Component;
