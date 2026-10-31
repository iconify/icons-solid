import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zt-_zyb9d.css';
import '../../css/x/x0sjc_bcl.css';
import '../../css/o/omi4i4cer.css';
import '../../css/k/ki5dxvbzq.css';
import '../../css/k/k703lvjik.css';
import '../../css/y/y_wlred_v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="zt-_zyb9d"/><path class="x0sjc_bcl"/><path class="omi4i4cer"/><path class="ki5dxvbzq"/><path class="k703lvjik"/><path class="y_wlred_v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:file-database-duotone"} {...others} />);
}

export default Component;
