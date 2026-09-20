import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/onhg1w-oy.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="onhg1w-oy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:syncwave-light"} {...others} />);
}

export default Component;
