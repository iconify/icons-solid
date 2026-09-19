import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pa9uucfpy.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pa9uucfpy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:arrow-circle-right"} {...others} />);
}

export default Component;
