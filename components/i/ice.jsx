import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fu-srac4k.css';
import '../../css/u/uj7xro1oo.css';
import '../../css/z/z3zt-6avv.css';
import '../../css/d/dx53d08zj.css';
import '../../css/j/j-venkpnw.css';
import '../../css/n/n-hy5msib.css';
import '../../css/n/nhxestbjj.css';
import '../../css/j/jpm9uxbig.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="fu-srac4k"/><path class="uj7xro1oo"/><path class="z3zt-6avv"/><path class="dx53d08zj"/><path class="j-venkpnw"/><g class="n-hy5msib"><path class="nhxestbjj"/><path class="jpm9uxbig"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:ice"} {...others} />);
}

export default Component;
