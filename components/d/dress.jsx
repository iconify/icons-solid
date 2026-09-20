import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zp6_ghb2n.css';
import '../../css/f/ffc7_vbou.css';
import '../../css/e/e-fiaf_0e.css';
import '../../css/a/anihirbsl.css';
import '../../css/y/yts8mcbjr.css';
import '../../css/n/n9t87g6xq.css';
import '../../css/h/hj-w_0lqc.css';
import '../../css/o/ozaskibyh.css';
import '../../css/f/fr5x92dym.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="zp6_ghb2n"/><path class="ffc7_vbou"/><path class="e-fiaf_0e"/><path class="anihirbsl"/><path class="yts8mcbjr"/><path class="n9t87g6xq"/><path class="hj-w_0lqc"/><path class="ozaskibyh"/><path class="fr5x92dym"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:dress"} {...others} />);
}

export default Component;
