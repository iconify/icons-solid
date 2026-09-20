import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dayna5bfn.css';
import '../../css/n/n4-2xrwrn.css';
import '../../css/n/nbu1q5bhw.css';
import '../../css/a/a6xh84eop.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/x/xiv_gnbuj.css';
import '../../css/e/ejf2gcqmq.css';
import '../../css/s/slh_-cbha.css';
import '../../css/m/mrvm1hfqi.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="dayna5bfn"/><path class="n4-2xrwrn"/><path class="nbu1q5bhw"/><path class="a6xh84eop"/><g class="ij2x_72vy"><path class="xiv_gnbuj"/><path class="ejf2gcqmq"/><path class="slh_-cbha"/><path class="mrvm1hfqi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:file-cabinet"} {...others} />);
}

export default Component;
