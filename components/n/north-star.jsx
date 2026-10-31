import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cioc2ditp.css';
import '../../css/i/i8loly4gl.css';
import '../../css/i/ijqqckb-j.css';
import '../../css/q/qtc2pspwd.css';
import '../../css/e/ex35m4c2c.css';
import '../../css/p/pz5-94l2j.css';
import '../../css/h/h4tc_pbva.css';
import '../../css/r/rzc5-9bdd.css';
import '../../css/b/bq0ubq16z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="cioc2ditp wm-k"/><path class="i8loly4gl wm-a"/><path class="ijqqckb-j wm-deco"/><path class="qtc2pspwd wm-k"/><path class="ex35m4c2c wm-k"/><path class="pz5-94l2j wm-a"/><path class="h4tc_pbva wm-shadow"/><path class="rzc5-9bdd wm-shine"/><path class="bq0ubq16z wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:north-star"} {...others} />);
}

export default Component;
