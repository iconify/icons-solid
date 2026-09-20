import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lldu6nt-n.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="lldu6nt-n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:orb-light"} {...others} />);
}

export default Component;
