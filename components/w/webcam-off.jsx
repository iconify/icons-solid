import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cm-utbc2b.css';
import '../../css/k/kjo442bcf.css';
import '../../css/y/ydkt6lb1q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="cm-utbc2b"/><path class="kjo442bcf"/><path class="ydkt6lb1q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:webcam-off"} {...others} />);
}

export default Component;
