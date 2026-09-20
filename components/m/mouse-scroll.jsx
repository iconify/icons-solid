import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ozms9_odv.css';
import '../../css/p/psjj64bet.css';
import '../../css/i/ioes2239h.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/d/dwhnc0bkd.css';
import '../../css/c/cuz6-yb6p.css';
import '../../css/n/n-mg_abtx.css';
import '../../css/p/p40avuhst.css';
import '../../css/w/wxmkqm1fm.css';
import '../../css/s/syhv7crqh.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="ozms9_odv"/><path class="psjj64bet"/><path class="ioes2239h"/><g class="ij2x_72vy"><path class="dwhnc0bkd"/><path class="cuz6-yb6p"/><path class="n-mg_abtx"/><path class="p40avuhst"/><path class="wxmkqm1fm"/><path class="syhv7crqh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:mouse-scroll"} {...others} />);
}

export default Component;
