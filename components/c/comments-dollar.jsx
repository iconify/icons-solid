import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tf38fyb_z.css';

const viewBox = {"width":576,"height":512};
const content = `<path class="tf38fyb_z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:comments-dollar"} {...others} />);
}

export default Component;
