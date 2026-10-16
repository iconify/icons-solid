import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vcwnokb_q.css';
import '../../css/f/fmapwp6bo.css';
import '../../css/l/l5ko85bai.css';
import '../../css/f/f6mprlhcu.css';
import '../../css/t/tq1xz-bas.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="vcwnokb_q"/><path class="fmapwp6bo"/><path class="l5ko85bai"/><path class="f6mprlhcu"/><path class="tq1xz-bas"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:speech-to-image"} {...others} />);
}

export default Component;
