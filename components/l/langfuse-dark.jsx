import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r0qakpzvw.css';
import '../../css/m/mhn4ay1xq.css';
import '../../css/t/ty23m0b9o.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="r0qakpzvw"/><path class="mhn4ay1xq"/><path class="ty23m0b9o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:langfuse-dark"} {...others} />);
}

export default Component;
