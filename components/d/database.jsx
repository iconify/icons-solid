import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fdpjy9bgs.css';
import '../../css/u/uguiubc9v.css';
import '../../css/n/n9cn1hsku.css';
import '../../css/c/cr-8p0b_t.css';
import '../../css/e/eojyrzgyt.css';
import '../../css/h/htkqi8bgb.css';
import '../../css/q/q1642ubjv.css';
import '../../css/j/j8wehvwoa.css';
import '../../css/j/jsaed7b2c.css';
import '../../css/z/zp6l2gb1i.css';
import '../../css/j/j8h_v-yov.css';
import '../../css/y/yn-qcvb-j.css';
import '../../css/v/vex7c5lfl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="fdpjy9bgs wm-shadow"/><path class="uguiubc9v wm-shadow"/><path class="n9cn1hsku"/><path class="cr-8p0b_t"/><path class="eojyrzgyt"/><path class="htkqi8bgb"/><path class="q1642ubjv"/><path class="j8wehvwoa"/><path class="jsaed7b2c"/><path class="zp6l2gb1i"/><path class="j8h_v-yov"/><path class="yn-qcvb-j"/><path class="vex7c5lfl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:database"} {...others} />);
}

export default Component;
