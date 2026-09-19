import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a7lgu_bae.css';
import '../../css/f/ffshr2bmr.css';
import '../../css/e/eg0obsd6y.css';
import '../../css/y/ysa52ub7p.css';
import '../../css/q/q6x6qabvt.css';
import '../../css/g/gpmwy-bmr.css';
import '../../css/z/zdhaa4bew.css';
import '../../css/r/r3zq_9bdi.css';
import '../../css/k/ke6te4biu.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="a7lgu_bae"/><path class="ffshr2bmr"/><path class="eg0obsd6y"/><path class="ysa52ub7p"/><path class="q6x6qabvt"/><path class="gpmwy-bmr"/><path class="zdhaa4bew"/><path class="r3zq_9bdi"/><path class="ke6te4biu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:wedding"} {...others} />);
}

export default Component;
