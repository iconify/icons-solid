import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kkpf3xbvg.css';
import '../../css/c/cyeoe2uoe.css';
import '../../css/z/zh12vprwm.css';
import '../../css/q/q0bpv7buf.css';

const viewBox = {"width":640,"height":480};
const content = `<path class="kkpf3xbvg"/><path class="cyeoe2uoe"/><path class="zh12vprwm"/><path class="q0bpv7buf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:sy-4x3"} {...others} />);
}

export default Component;
