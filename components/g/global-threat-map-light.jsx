import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mmc55qbpv.css';
import '../../css/g/g5l3qyt-f.css';
import '../../css/w/wlqkezb7v.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mmc55qbpv"/><circle class="g5l3qyt-f"/><circle class="wlqkezb7v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:global-threat-map-light"} {...others} />);
}

export default Component;
