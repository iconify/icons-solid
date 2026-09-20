import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z6ng5nn9x.css';
import '../../css/g/g_89u0fhz.css';
import '../../css/f/f82iii8fi.css';
import '../../css/m/m-cdu6bwn.css';
import '../../css/v/v41y8ob8n.css';
import '../../css/b/bo7rjobbu.css';
import '../../css/a/arda8we3l.css';
import '../../css/l/l7i881bxt.css';
import '../../css/m/mw7gvebzz.css';
import '../../css/j/jnsta5bxr.css';
import '../../css/j/jnd7n4bvu.css';
import '../../css/b/b1yy42z_l.css';
import '../../css/c/cds3t397n.css';
import '../../css/r/rszd9pbnz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="z6ng5nn9x"/><path class="g_89u0fhz"/><path class="f82iii8fi"/><path class="m-cdu6bwn"/><path class="v41y8ob8n"/><path class="bo7rjobbu"/><path class="arda8we3l"/><path class="l7i881bxt"/><path class="mw7gvebzz"/><path class="jnsta5bxr"/><path class="jnd7n4bvu"/><path class="b1yy42z_l"/><path class="cds3t397n"/><path class="rszd9pbnz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:antenna"} {...others} />);
}

export default Component;
