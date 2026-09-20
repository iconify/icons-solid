import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c1hw_fahx.css';
import '../../css/u/u04jshbcv.css';
import '../../css/m/mbya3ipik.css';
import '../../css/p/pj3du_x0w.css';
import '../../css/x/x5re95bgu.css';
import '../../css/k/ky-dqz--l.css';
import '../../css/i/i8wgb7b_a.css';
import '../../css/h/hjic24boi.css';
import '../../css/y/yfgy93b9e.css';
import '../../css/q/q0g1lgzjm.css';
import '../../css/k/kh8zl7bfn.css';
import '../../css/b/b2bpjgqze.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="c1hw_fahx"/><path class="u04jshbcv"/><path class="mbya3ipik"/><path clip-rule="evenodd" class="pj3du_x0w"/><path class="x5re95bgu"/><path class="ky-dqz--l"/><path class="i8wgb7b_a"/><path class="hjic24boi"/><path class="yfgy93b9e"/><path class="q0g1lgzjm"/><path clip-rule="evenodd" class="kh8zl7bfn"/><path clip-rule="evenodd" class="b2bpjgqze"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:student-woman-2-duo"} {...others} />);
}

export default Component;
