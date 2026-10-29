import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iomz5cbgr.css';
import '../../css/c/cvzui6b7p.css';
import '../../css/t/t58ortbfm.css';
import '../../css/g/g91-pseek.css';
import '../../css/l/l5n4sxbjq.css';
import '../../css/g/g5cmr2blm.css';
import '../../css/w/w6751grib.css';
import '../../css/q/q0fo1ccor.css';
import '../../css/k/k-ohhii8s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="iomz5cbgr wm-shadow"/><path class="cvzui6b7p wm-shadow"/><path class="t58ortbfm"/><path class="g91-pseek"/><path class="l5n4sxbjq"/><path class="g5cmr2blm"/><path class="w6751grib wm-shine"/><path class="q0fo1ccor wm-shine"/><path class="k-ohhii8s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:pound-sterling"} {...others} />);
}

export default Component;
