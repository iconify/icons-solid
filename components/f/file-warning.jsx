import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wlsib_bls.css';
import '../../css/n/nllfw1bvl.css';
import '../../css/a/aqxgmvb0r.css';
import '../../css/c/cvaor0ben.css';
import '../../css/k/kdswjob0j.css';
import '../../css/y/y_s8u1brt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wlsib_bls wm-k"/><path class="nllfw1bvl wm-deco"/><path class="aqxgmvb0r wm-k"/><path class="cvaor0ben wm-k"/><path class="kdswjob0j wm-shadow"/><path class="wm-shine y_s8u1brt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:file-warning"} {...others} />);
}

export default Component;
