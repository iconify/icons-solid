import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/su0c4kbpf.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="su0c4kbpf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:privadovpn-light"} {...others} />);
}

export default Component;
