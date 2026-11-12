import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p4fj4wl6b.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="p4fj4wl6b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:arlo-dark"} {...others} />);
}

export default Component;
