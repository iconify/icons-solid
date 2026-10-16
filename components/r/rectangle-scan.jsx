import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/ts1ovjoar.css';
import '../../css/x/xvu_v82pz.css';
import '../../css/x/xlstbab5p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect transform="matrix(0 -1 -1 0 18.06 16.2)" class="ts1ovjoar"/><path class="xvu_v82pz"/><rect transform="matrix(0 -1 -1 0 18.06 16.2)" class="xlstbab5p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:rectangle-scan"} {...others} />);
}

export default Component;
