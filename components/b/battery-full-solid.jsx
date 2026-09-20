import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/my_j7lbze.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="my_j7lbze"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:battery-full-solid"} {...others} />);
}

export default Component;
