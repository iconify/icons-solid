import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/ry62_ccfj.css';
import '../../css/n/no24npb0h.css';
import '../../css/w/wx1pd_bam.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect class="ry62_ccfj"/><rect class="no24npb0h"/><path class="wx1pd_bam"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:background"} {...others} />);
}

export default Component;
