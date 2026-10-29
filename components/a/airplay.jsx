import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cw4aen14t.css';
import '../../css/r/rf2wq1bjs.css';
import '../../css/j/j5y2seq4o.css';
import '../../css/c/cgwnmxzxj.css';
import '../../css/n/nsmo-2l7c.css';
import '../../css/v/v_7pb0b8z.css';
import '../../css/e/edc-lhbim.css';
import '../../css/t/tym76ub7w.css';
import '../../css/m/mdp415ocr.css';
import '../../css/m/mtx16xwrw.css';
import '../../css/g/gu-8ilb1r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="cw4aen14t wm-k"/><path class="rf2wq1bjs wm-k"/><path class="j5y2seq4o wm-k"/><path class="cgwnmxzxj wm-k"/><path class="nsmo-2l7c wm-shine"/><path class="v_7pb0b8z wm-a"/><path class="edc-lhbim wm-a"/><path class="tym76ub7w wm-a"/><path class="mdp415ocr wm-shine"/><path class="mtx16xwrw wm-k"/><path class="gu-8ilb1r wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:airplay"} {...others} />);
}

export default Component;
