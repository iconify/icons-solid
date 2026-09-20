import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r8_-_7r8z.css';
import '../../css/x/x42fw7s8p.css';
import '../../css/n/n4het_brd.css';
import '../../css/q/quiqqgb4d.css';
import '../../css/q/qos18zm3l.css';
import '../../css/s/szafv0rye.css';
import '../../css/j/jcoosxbfr.css';
import '../../css/t/tpr47dcpd.css';
import '../../css/a/abhbv6bqu.css';
import '../../css/u/usiwm0brr.css';
import '../../css/x/x5zihjbjl.css';
import '../../css/p/pu-8scbjt.css';
import '../../css/b/bfh29bcuo.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="r8_-_7r8z"/><path class="x42fw7s8p"/><path class="n4het_brd"/><path class="quiqqgb4d"/><path class="qos18zm3l"/><path class="szafv0rye"/><path class="jcoosxbfr"/><path class="tpr47dcpd"/><path class="abhbv6bqu"/><path class="usiwm0brr"/><path class="x5zihjbjl"/><path class="pu-8scbjt"/><path class="bfh29bcuo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:man-in-tuxedo-medium-skin-tone"} {...others} />);
}

export default Component;
