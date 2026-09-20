import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p90yc2h1l.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="p90yc2h1l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:freeresend-dark"} {...others} />);
}

export default Component;
