import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lq3q1qbjn.css';
import '../../css/d/ds65nt-eh.css';
import '../../css/q/qvl9c6b0s.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="lq3q1qbjn"/><path clip-rule="evenodd" class="ds65nt-eh"/><path class="qvl9c6b0s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:sunset"} {...others} />);
}

export default Component;
