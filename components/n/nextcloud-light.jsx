import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gja2twb9p.css';
import '../../css/q/qwc-lyped.css';
import '../../css/s/s42la0b2p.css';

const viewBox = {"width":512,"height":512};
const content = `<circle clip-rule="evenodd" transform="rotate(-13.286 255.94 255.868)" class="gja2twb9p"/><path clip-rule="evenodd" class="qwc-lyped"/><path clip-rule="evenodd" class="s42la0b2p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:nextcloud-light"} {...others} />);
}

export default Component;
