import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yy3_swbuw.css';
import '../../css/c/cirz40mcf.css';
import '../../css/y/yfvfcf95y.css';
import '../../css/i/i8rer_but.css';
import '../../css/o/ocbenbb7v.css';
import '../../css/q/qwk6d3ldw.css';
import '../../css/t/tnujd-hbu.css';
import '../../css/f/ft6sv1slq.css';
import '../../css/f/fiq5w1bia.css';
import '../../css/t/tf989cc_h.css';
import '../../css/p/pnhu9wb5z.css';
import '../../css/x/xihmiub-b.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="yy3_swbuw"/><path class="cirz40mcf"/><path class="yfvfcf95y"/><path class="i8rer_but"/><path class="ocbenbb7v"/><path class="qwk6d3ldw"/><path class="tnujd-hbu"/><path class="ft6sv1slq"/><path class="fiq5w1bia"/><path class="tf989cc_h"/><path class="pnhu9wb5z"/><path class="xihmiub-b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:theater"} {...others} />);
}

export default Component;
