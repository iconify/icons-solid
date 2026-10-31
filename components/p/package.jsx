import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ex8v_mbco.css';
import '../../css/l/le01cye7u.css';
import '../../css/v/vp85-zhhe.css';
import '../../css/m/m9w1o5qow.css';
import '../../css/w/w-f2_libs.css';
import '../../css/o/odx2n7bbh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ex8v_mbco wm-k"/><path class="le01cye7u wm-deco"/><path class="vp85-zhhe wm-k"/><path class="m9w1o5qow wm-shadow"/><path class="w-f2_libs wm-shine"/><path class="odx2n7bbh wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:package"} {...others} />);
}

export default Component;
