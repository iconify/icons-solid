import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c5vcxuqoq.css';
import '../../css/g/gsnu8fbkv.css';
import '../../css/i/ivjvz2eii.css';
import '../../css/a/a38ub9rww.css';
import '../../css/i/ik9u07mie.css';
import '../../css/h/h01tyzbfu.css';
import '../../css/i/isn-wpbyf.css';
import '../../css/l/l0bn-3b4l.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGVMnuzcqq" class="c5vcxuqoq"/><path id="SVGvvd0ferX" class="gsnu8fbkv"/></defs><mask id="SVGF2BX2roZ" width="8" height="5" x="8" y="2" maskUnits="userSpaceOnUse" class="ivjvz2eii"><path class="a38ub9rww"/><use href="#SVGVMnuzcqq"/></mask><mask id="SVGtHHJbeaR" width="8" height="5" x="8" y="17" maskUnits="userSpaceOnUse" class="ivjvz2eii"><path class="ik9u07mie"/><use href="#SVGvvd0ferX"/></mask><g class="h01tyzbfu"><rect class="isn-wpbyf"/><use href="#SVGVMnuzcqq" mask="url(#SVGF2BX2roZ)" class="l0bn-3b4l"/><use href="#SVGvvd0ferX" mask="url(#SVGtHHJbeaR)" class="l0bn-3b4l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:watch-alt-light"} {...others} />);
}

export default Component;
