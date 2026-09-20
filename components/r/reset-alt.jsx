import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/v/vq3x8pbhc.css';
import '../../css/x/xy8ywpa0a.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="jtowsomii"><path class="vq3x8pbhc"/><path class="xy8ywpa0a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:reset-alt"} {...others} />);
}

export default Component;
