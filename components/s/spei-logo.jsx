import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/xjewkgbfv.css';
import '../../css/m/mpih4rkil.css';
import '../../css/r/rg0_i5ydm.css';
import '../../css/r/r90wbzb7w.css';

const viewBox = {"width":7874.03,"height":2659.55,"left":111.84,"top":48.85};
const content = `<g class="d2kvgvbvc"><path class="xjewkgbfv"/><path class="mpih4rkil"/><path class="rg0_i5ydm"/><path class="r90wbzb7w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:spei-logo"} {...others} />);
}

export default Component;
