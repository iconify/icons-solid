import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ob6819b0v.css';
import '../../css/f/fbysei-9q.css';
import '../../css/i/i2kpd3x5t.css';
import '../../css/w/wa5c4nbtp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ob6819b0v"/><path class="fbysei-9q"/><circle class="i2kpd3x5t"/><path class="wa5c4nbtp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:folder-settings"} {...others} />);
}

export default Component;
