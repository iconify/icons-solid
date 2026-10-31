import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zwlmx-b3y.css';
import '../../css/d/dlg1f9bpn.css';
import '../../css/v/vioal8b1j.css';
import '../../css/p/p_2y21whp.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="zwlmx-b3y"/><path class="dlg1f9bpn"/><path class="vioal8b1j"/><path class="p_2y21whp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconito:mint"} {...others} />);
}

export default Component;
