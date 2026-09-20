import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ip-a2mckl.css';
import '../../css/p/p_p4lxbry.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ip-a2mckl"/><path class="p_p4lxbry"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:spotify"} {...others} />);
}

export default Component;
