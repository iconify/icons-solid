import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mj4sx_wkb.css';
import '../../css/i/ipyyj6ggt.css';
import '../../css/s/sun_m7tdj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mj4sx_wkb"/><path class="ipyyj6ggt"/><path class="sun_m7tdj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:watchtower-light"} {...others} />);
}

export default Component;
