import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c_cdhz6pk.css';
import '../../css/s/s6z8q3b6k.css';
import '../../css/p/pkskc5z1h.css';
import '../../css/c/cii4xlw-a.css';
import '../../css/z/z3u7784pv.css';
import '../../css/j/jt1zzwbef.css';
import '../../css/z/z1hkbb0eq.css';
import '../../css/g/g_r8mp5yb.css';
import '../../css/e/es_qxqb3d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="c_cdhz6pk"/><path class="s6z8q3b6k"/><path class="pkskc5z1h"/><path class="cii4xlw-a"/><path class="z3u7784pv"/><path class="jt1zzwbef"/><path class="z1hkbb0eq"/><path class="g_r8mp5yb"/><path class="es_qxqb3d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:pen-write"} {...others} />);
}

export default Component;
