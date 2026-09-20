import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n-dusubmx.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="n-dusubmx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:mozilla-vpn-dark"} {...others} />);
}

export default Component;
