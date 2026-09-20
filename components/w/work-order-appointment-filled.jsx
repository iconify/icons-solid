import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e7qlfbcri.css';
import '../../css/q/qcjn5ubrr.css';
import '../../css/g/g_l_olm7n.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="e7qlfbcri"/><path class="qcjn5ubrr"/><path clip-rule="evenodd" class="g_l_olm7n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:work-order-appointment-filled"} {...others} />);
}

export default Component;
