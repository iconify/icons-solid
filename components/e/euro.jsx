import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ixbc32brp.css';
import '../../css/s/s5jlbwbpr.css';
import '../../css/l/le1_pfbyn.css';
import '../../css/v/vpnficcxb.css';
import '../../css/g/gsbxh-bjr.css';
import '../../css/r/r1uum1bus.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ixbc32brp wm-shadow"/><path class="s5jlbwbpr wm-k"/><path class="le1_pfbyn wm-k"/><path class="vpnficcxb wm-k"/><path class="gsbxh-bjr wm-k"/><path class="r1uum1bus wm-shine"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:euro"} {...others} />);
}

export default Component;
