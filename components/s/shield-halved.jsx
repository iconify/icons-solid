import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n83m5i-4m.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="n83m5i-4m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:shield-halved"} {...others} />);
}

export default Component;
