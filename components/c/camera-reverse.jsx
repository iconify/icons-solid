import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cgoy5g6-n.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="cgoy5g6-n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:camera-reverse"} {...others} />);
}

export default Component;
