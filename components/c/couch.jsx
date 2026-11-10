import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mmj7lrbbf.css';
import '../../css/m/mq6zinb0v.css';
import '../../css/t/tru9dvbky.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="mmj7lrbbf"/><path class="mq6zinb0v"/><path class="tru9dvbky"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:couch"} {...others} />);
}

export default Component;
