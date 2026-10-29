import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fo8penbcl.css';
import '../../css/s/sczw8r4ky.css';
import '../../css/m/mvw5fabfc.css';
import '../../css/h/htxqckozr.css';
import '../../css/c/cc0y55b7x.css';
import '../../css/i/ikzbt7qzu.css';
import '../../css/f/f330r4bdm.css';
import '../../css/j/juy-s4bsd.css';
import '../../css/g/gv_bpnbwq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fo8penbcl wm-shadow"/><path class="sczw8r4ky wm-k"/><path class="mvw5fabfc wm-k"/><path class="htxqckozr wm-k"/><path class="cc0y55b7x wm-k"/><path class="ikzbt7qzu wm-k"/><path class="f330r4bdm wm-k"/><path class="juy-s4bsd wm-k"/><path class="gv_bpnbwq wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:playground"} {...others} />);
}

export default Component;
