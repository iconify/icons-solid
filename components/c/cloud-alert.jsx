import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/q/qls1b4w4x.css';
import '../../css/s/sfx2tz2qf.css';
import '../../css/o/ow2_-pl5v.css';
import '../../css/j/jpsbvtbhh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="qls1b4w4x wm-shadow"/><path class="sfx2tz2qf wm-shadow"/><path class="ow2_-pl5v"/><path class="jpsbvtbhh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:cloud-alert"} {...others} />);
}

export default Component;
