import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k3x_ug_ff.css';
import '../../css/t/tb35ynitm.css';
import '../../css/e/edwd7ibhc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k3x_ug_ff"/><path class="tb35ynitm"/><path class="edwd7ibhc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:record-minimalistic-bold-duotone"} {...others} />);
}

export default Component;
