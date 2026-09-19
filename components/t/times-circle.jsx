import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hv2jm7uoi.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hv2jm7uoi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-regular:times-circle"} {...others} />);
}

export default Component;
