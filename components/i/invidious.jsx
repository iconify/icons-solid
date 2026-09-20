import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gxvcavblc.css';
import '../../css/x/xy40cepxe.css';
import '../../css/e/exoxidbsb.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="gxvcavblc"/><path class="xy40cepxe"/><path class="exoxidbsb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:invidious"} {...others} />);
}

export default Component;
