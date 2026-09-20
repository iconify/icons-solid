import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jkq7-hbwz.css';
import '../../css/b/bc5-xubfs.css';
import '../../css/j/jpvb309lh.css';
import '../../css/t/t6fswnnuc.css';
import '../../css/k/kfiyvrbmr.css';
import '../../css/z/zuflihnqh.css';
import '../../css/u/ueou_ejbd.css';
import '../../css/v/vey4gbhgb.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="jkq7-hbwz"/><g class="bc5-xubfs"><path class="jpvb309lh"/><path class="t6fswnnuc"/><path class="kfiyvrbmr"/><path class="zuflihnqh"/><path class="ueou_ejbd"/><path class="vey4gbhgb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:barcode"} {...others} />);
}

export default Component;
