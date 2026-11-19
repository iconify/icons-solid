import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ixogiuakh.css';
import '../../css/r/rqf3ibcsb.css';
import '../../css/u/ucljogcuz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ixogiuakh"/><path class="rqf3ibcsb"/><path class="ucljogcuz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:droplets"} {...others} />);
}

export default Component;
