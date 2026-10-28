import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k8jrf-bba.css';
import '../../css/e/ee7_e7dxx.css';
import '../../css/r/rw1aaur7o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect transform="rotate(90 0 21.24)scale(-1 1)" class="k8jrf-bba"/><path class="ee7_e7dxx"/><path clip-rule="evenodd" class="rw1aaur7o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:margins"} {...others} />);
}

export default Component;
