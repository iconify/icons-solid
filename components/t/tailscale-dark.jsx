import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dy7st-bkc.css';
import '../../css/n/n8ezhzb1d.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="dy7st-bkc"/><path class="n8ezhzb1d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:tailscale-dark"} {...others} />);
}

export default Component;
