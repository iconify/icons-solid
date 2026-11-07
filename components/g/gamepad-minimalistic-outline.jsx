import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qxna7-bqs.css';
import '../../css/e/edbk4g8dt.css';
import '../../css/x/xoc_r0_3a.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="qxna7-bqs"/><path class="edbk4g8dt"/><path class="xoc_r0_3a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:gamepad-minimalistic-outline"} {...others} />);
}

export default Component;
