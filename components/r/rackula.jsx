import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wlgv7ybbq.css';
import '../../css/b/bpn70zs4k.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wlgv7ybbq"/><path class="bpn70zs4k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:rackula"} {...others} />);
}

export default Component;
