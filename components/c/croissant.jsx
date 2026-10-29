import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kjpjvg_ri.css';
import '../../css/m/mpc3_pbvf.css';
import '../../css/f/fv51uwb0l.css';
import '../../css/m/mdl2mublf.css';
import '../../css/m/m0ko3dbtm.css';
import '../../css/a/avm-fjbfv.css';
import '../../css/j/jm65q1z0p.css';
import '../../css/e/ewd2hkbkl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kjpjvg_ri wm-shadow"/><path class="mpc3_pbvf wm-k"/><path class="fv51uwb0l wm-k"/><path class="mdl2mublf wm-k"/><path class="m0ko3dbtm wm-k"/><path class="avm-fjbfv wm-k"/><path class="jm65q1z0p wm-shine"/><path class="ewd2hkbkl wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:croissant"} {...others} />);
}

export default Component;
