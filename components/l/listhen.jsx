import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wwnvnhtuf.css';
import '../../css/w/w73t0xrpc.css';
import '../../css/i/itmz3uk7h.css';
import '../../css/i/icgy7_u1b.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="wwnvnhtuf"/><path class="w73t0xrpc"/><path class="itmz3uk7h"/><path class="icgy7_u1b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"unjs:listhen"} {...others} />);
}

export default Component;
