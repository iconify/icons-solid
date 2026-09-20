import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lntkaob4s.css';
import '../../css/p/pc_b7vbqs.css';
import '../../css/b/b78_k0b_z.css';
import '../../css/i/icywm0byl.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGaf9p9dBl" x1="1756.972" x2="5331.565" y1="7398.358" y2="3567.638" gradientTransform="translate(-89.428 -278.926)scale(.09752)" gradientUnits="userSpaceOnUse"><stop offset="0" class="lntkaob4s"/><stop offset="1" class="pc_b7vbqs"/></linearGradient><circle fill="url(#SVGaf9p9dBl)" class="b78_k0b_z"/><path class="icywm0byl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ferdium"} {...others} />);
}

export default Component;
