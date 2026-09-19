import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qh9mglbwk.css';
import '../../css/m/mdt1zbc6x.css';
import '../../css/h/hnvcyqpyt.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qh9mglbwk"/><path class="mdt1zbc6x"/><path class="hnvcyqpyt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-recording-outline"} {...others} />);
}

export default Component;
