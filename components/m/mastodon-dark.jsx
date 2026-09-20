import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pte5rzrpn.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pte5rzrpn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:mastodon-dark"} {...others} />);
}

export default Component;
