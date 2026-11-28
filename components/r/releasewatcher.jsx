import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y653e0pli.css';
import '../../css/y/yol3kp1rs.css';

const viewBox = {"width":512,"height":512};
const content = `<rect class="y653e0pli"/><path class="yol3kp1rs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:releasewatcher"} {...others} />);
}

export default Component;
