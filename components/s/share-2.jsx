import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/no1-96agr.css';
import '../../css/m/mid7a31tz.css';
import '../../css/b/b7cg9yrvz.css';
import '../../css/c/c_77pk7wb.css';
import '../../css/d/dnxvl6b1a.css';
import '../../css/g/gd1fxpu6h.css';
import '../../css/l/l14jcd68k.css';
import '../../css/v/v-6ic2eoq.css';
import '../../css/z/zor5tubfj.css';
import '../../css/q/q2yjokb6z.css';
import '../../css/b/bf4k5nonl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="no1-96agr wm-shadow"/><path class="mid7a31tz wm-k"/><path class="b7cg9yrvz wm-k"/><path class="c_77pk7wb wm-k"/><path class="dnxvl6b1a wm-shine"/><path class="gd1fxpu6h wm-a"/><path class="l14jcd68k wm-a"/><path class="v-6ic2eoq wm-a"/><path class="wm-a zor5tubfj"/><path class="q2yjokb6z wm-shine"/><path class="bf4k5nonl wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-coquette:share-2"} {...others} />);
}

export default Component;
