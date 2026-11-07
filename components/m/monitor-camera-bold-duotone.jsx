import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pdjiz7b1s.css';
import '../../css/t/tx7dcyx9v.css';
import '../../css/k/k-6z9bsqk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pdjiz7b1s"/><path class="tx7dcyx9v"/><path class="k-6z9bsqk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:monitor-camera-bold-duotone"} {...others} />);
}

export default Component;
