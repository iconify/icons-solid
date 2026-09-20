import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lmo9ppb1i.css';
import '../../css/j/j1s865b3p.css';
import '../../css/r/r4z8w6bvh.css';
import '../../css/q/qwddo9bfd.css';
import '../../css/k/k7_uq0p4l.css';
import '../../css/w/wra00vbrk.css';
import '../../css/c/cv9bbxb-a.css';
import '../../css/n/nkhr2cbvg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="lmo9ppb1i"><path class="j1s865b3p"/><path class="r4z8w6bvh"/><path class="qwddo9bfd"/><path class="k7_uq0p4l"/><path class="wra00vbrk"/><path class="cv9bbxb-a"/><path class="nkhr2cbvg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:analytics-bars-3d"} {...others} />);
}

export default Component;
