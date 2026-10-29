import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l9wvk6b3i.css';
import '../../css/a/a6rhncb-u.css';
import '../../css/i/ibl1xbbkn.css';
import '../../css/d/d8q7_jb6a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="l9wvk6b3i wm-k"/><path class="a6rhncb-u wm-k"/><path class="ibl1xbbkn wm-k"/><path class="d8q7_jb6a wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:reply"} {...others} />);
}

export default Component;
