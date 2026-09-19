import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w-h-79ber.css';

const viewBox = {"width":576,"height":512};
const content = `<path class="w-h-79ber"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:hospital-alt"} {...others} />);
}

export default Component;
