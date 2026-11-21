import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mwmgjbblk.css';
import '../../css/m/mmfi7hwff.css';
import '../../css/y/yo8uw-b3d.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mwmgjbblk"/><path class="mmfi7hwff"/><circle class="yo8uw-b3d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:flower-outline"} {...others} />);
}

export default Component;
