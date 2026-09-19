import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/m/mcf61j4pk.css';
import '../../css/l/lc0t065gh.css';
import '../../css/x/x10lujbnp.css';
import '../../css/t/t_imz18vr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="mcf61j4pk"/><path class="lc0t065gh"/><path class="x10lujbnp"/><path class="t_imz18vr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:surveillance-cameras"} {...others} />);
}

export default Component;
