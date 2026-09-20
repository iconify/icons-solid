import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xf5k5xfoa.css';
import '../../css/z/z5yqvnj6j.css';
import '../../css/s/s20x3xb_w.css';
import '../../css/i/i_rnlo3xw.css';
import '../../css/u/u8ak04bnj.css';
import '../../css/v/vy6r-fz1n.css';
import '../../css/s/s57vosbrg.css';
import '../../css/r/r4maw1_6a.css';
import '../../css/l/lwr3sgggr.css';
import '../../css/l/lamyt3b4q.css';
import '../../css/q/q7j072jud.css';
import '../../css/g/gzcmowo-d.css';
import '../../css/o/o4gjqu-lh.css';
import '../../css/r/r49divpxk.css';

const viewBox = {"width":72,"height":72};
const content = `<ellipse class="xf5k5xfoa"/><path class="z5yqvnj6j"/><path class="s20x3xb_w"/><circle class="i_rnlo3xw"/><circle class="u8ak04bnj"/><path class="vy6r-fz1n"/><ellipse transform="rotate(-50 44.545 38.517)" class="s57vosbrg"/><ellipse transform="rotate(-40 26.558 38.517)" class="r4maw1_6a"/><path class="lwr3sgggr"/><circle class="lamyt3b4q"/><ellipse transform="rotate(-50 44.545 38.517)" class="q7j072jud"/><ellipse transform="rotate(-40 26.558 38.517)" class="gzcmowo-d"/><path class="o4gjqu-lh"/><circle class="r49divpxk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:nuclear-protection"} {...others} />);
}

export default Component;
