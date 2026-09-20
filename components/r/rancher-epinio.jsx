import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i0oiyblvd.css';
import '../../css/n/nxr9mlzqr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="i0oiyblvd"/><path class="nxr9mlzqr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:rancher-epinio"} {...others} />);
}

export default Component;
