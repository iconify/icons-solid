import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dhq0_w-kq.css';
import '../../css/j/j95qubcnh.css';
import '../../css/x/xpavwbcrh.css';
import '../../css/v/vu9ry25jl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dhq0_w-kq wm-a"/><path class="j95qubcnh wm-k"/><path class="wm-k xpavwbcrh"/><path class="vu9ry25jl wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:lock"} {...others} />);
}

export default Component;
