import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dy7st-bkc.css';
import '../../css/e/e0tloob2u.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="dy7st-bkc"/><path class="e0tloob2u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:tailscale"} {...others} />);
}

export default Component;
