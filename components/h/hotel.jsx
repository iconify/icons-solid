import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dgwlyubic.css';
import '../../css/o/ohjklpuln.css';
import '../../css/o/oaildwbhf.css';
import '../../css/o/oc1d-ibzc.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="dgwlyubic"/><path class="ohjklpuln"/><path class="oaildwbhf"/><path class="oc1d-ibzc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:hotel"} {...others} />);
}

export default Component;
