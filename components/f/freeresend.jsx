import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ff5t4wldt.css';
import '../../css/n/ng743gb9u.css';
import '../../css/x/x8brv2t3t.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ff5t4wldt"/><path class="ng743gb9u"/><path class="x8brv2t3t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:freeresend"} {...others} />);
}

export default Component;
