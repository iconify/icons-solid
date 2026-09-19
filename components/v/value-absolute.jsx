import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h2dth6bur.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="h2dth6bur"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:value-absolute"} {...others} />);
}

export default Component;
