import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/y/y_tz4vbcs.css';
import '../../css/q/qctmqxboa.css';
import '../../css/o/o0fh4gb6w.css';
import '../../css/n/n93_tdbcb.css';
import '../../css/j/jy9nt07gp.css';
import '../../css/f/fnes-bbeb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="wm-deco y_tz4vbcs"/><path class="qctmqxboa wm-deco"/><path class="o0fh4gb6w wm-deco"/><path class="n93_tdbcb wm-k"/><path class="jy9nt07gp wm-a"/><path class="fnes-bbeb wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:dumpling-blueprint"} {...others} />);
}

export default Component;
