import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sq7qv2hlk.css';
import '../../css/a/ax75gabsj.css';
import '../../css/k/k8jrf-bba.css';
import '../../css/q/qc-y5ubsu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect transform="rotate(90 21.24 3)" class="sq7qv2hlk"/><rect transform="rotate(90 21.24 15.1)" class="ax75gabsj"/><rect transform="rotate(90 0 21.24)scale(-1 1)" class="k8jrf-bba"/><path class="qc-y5ubsu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:table-cells-split"} {...others} />);
}

export default Component;
