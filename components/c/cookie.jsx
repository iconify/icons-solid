import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t3r1kgb5v.css';
import '../../css/j/jobeclqnb.css';
import '../../css/h/hyu2wq3zn.css';
import '../../css/a/aa-auccij.css';
import '../../css/j/j769xdb2x.css';
import '../../css/p/p_1dacb9r.css';
import '../../css/f/fm_r53u0l.css';
import '../../css/f/frk_wy7vz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t3r1kgb5v wm-shadow"/><path class="jobeclqnb wm-k"/><path class="hyu2wq3zn wm-k"/><path class="aa-auccij wm-k"/><path class="j769xdb2x wm-k"/><path class="p_1dacb9r wm-shine"/><path class="fm_r53u0l wm-k"/><path class="frk_wy7vz wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:cookie"} {...others} />);
}

export default Component;
