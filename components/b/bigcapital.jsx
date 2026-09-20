import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rwv3g5b-i.css';
import '../../css/x/xftpn6bca.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rwv3g5b-i"/><path class="xftpn6bca"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:bigcapital"} {...others} />);
}

export default Component;
