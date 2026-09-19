import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rp64embkk.css';
import '../../css/i/i6zzx6b9n.css';
import '../../css/a/a56cl1b3n.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rp64embkk"/><path class="i6zzx6b9n"/><path class="a56cl1b3n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:admissiontickets"} {...others} />);
}

export default Component;
