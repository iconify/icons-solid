import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e0bjz5b4t.css';
import '../../css/v/v-c8g5bhh.css';
import '../../css/k/k256ozbaa.css';
import '../../css/n/np-d-1y9l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="e0bjz5b4t"/><path class="v-c8g5bhh"/><circle class="k256ozbaa"/><path class="np-d-1y9l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:send-clock"} {...others} />);
}

export default Component;
