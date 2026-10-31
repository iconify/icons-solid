import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dywk60bfr.css';
import '../../css/i/ik9g-ubgo.css';
import '../../css/g/g66t9rb4f.css';
import '../../css/u/ue7nl_7uk.css';
import '../../css/u/u7l_q6bhh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="dywk60bfr wm-k"/><path class="ik9g-ubgo wm-shine"/><path class="g66t9rb4f wm-shine"/><path class="ue7nl_7uk wm-shine"/><path class="u7l_q6bhh wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-lunar:file-check"} {...others} />);
}

export default Component;
