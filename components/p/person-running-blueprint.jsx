import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/g/gm-nse89l.css';
import '../../css/v/v0f4n_02z.css';
import '../../css/e/eomrb07zs.css';
import '../../css/q/q6q0abw9e.css';
import '../../css/g/g7bw9mbte.css';
import '../../css/o/o-kff7udp.css';
import '../../css/j/j33lxvh1h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="gm-nse89l wm-deco"/><path class="v0f4n_02z wm-deco"/><path class="eomrb07zs wm-deco"/><path class="q6q0abw9e wm-k"/><path class="g7bw9mbte wm-a"/><path class="o-kff7udp wm-k"/><path class="j33lxvh1h wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:person-running-blueprint"} {...others} />);
}

export default Component;
