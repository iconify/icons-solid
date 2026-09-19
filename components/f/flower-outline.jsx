import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/ws3dbbcgn.css';
import '../../css/p/p1ijl2b0l.css';
import '../../css/y/yo8uw-b3d.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ws3dbbcgn"/><path class="p1ijl2b0l"/><circle class="yo8uw-b3d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:flower-outline"} {...others} />);
}

export default Component;
