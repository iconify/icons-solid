import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rt29-ub7w.css';
import '../../css/y/y5quf9bmj.css';
import '../../css/i/is7p5cbxn.css';
import '../../css/z/zkbs1nbtc.css';
import '../../css/c/caxiq0bjq.css';
import '../../css/e/er2_eqsjj.css';
import '../../css/d/dzc0tac5f.css';
import '../../css/f/fr_k8vwzi.css';
import '../../css/g/gn0logbmu.css';
import '../../css/g/gs9h9kblt.css';

const viewBox = {"width":255.4,"height":255.4};
const content = `<path class="rt29-ub7w"/><path class="y5quf9bmj"/><path class="is7p5cbxn"/><path class="zkbs1nbtc"/><path class="caxiq0bjq"/><path class="er2_eqsjj"/><path class="dzc0tac5f"/><path class="fr_k8vwzi"/><path class="gn0logbmu"/><path class="gs9h9kblt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:lychee"} {...others} />);
}

export default Component;
