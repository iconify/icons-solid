import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/p/pcl3d89qc.css';
import '../../css/l/la7gkwdbc.css';
import '../../css/n/nv0xecb8e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="pcl3d89qc"/><path class="la7gkwdbc"/><path class="nv0xecb8e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:headset-off-sharp-two-tone"} {...others} />);
}

export default Component;
