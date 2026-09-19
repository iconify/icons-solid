import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wqwf-7vsq.css';
import '../../css/h/h4goj9b3w.css';
import '../../css/g/g3xx-hbyi.css';
import '../../css/i/ivjvz2eii.css';
import '../../css/p/pxai-ldtt.css';
import '../../css/y/y_swu2baf.css';
import '../../css/c/cpkv81lsx.css';
import '../../css/o/om4xkye9x.css';
import '../../css/x/xr2w-0bff.css';

const viewBox = {"width":32,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="wqwf-7vsq"/><path clip-rule="evenodd" class="h4goj9b3w"/><path clip-rule="evenodd" class="g3xx-hbyi"/><mask id="SVGJRkaecvp" width="36" height="38" x="-2" y="-7" maskUnits="userSpaceOnUse" class="ivjvz2eii"><path class="pxai-ldtt"/><path clip-rule="evenodd" class="y_swu2baf"/></mask><path clip-rule="evenodd" class="cpkv81lsx"/><path mask="url(#SVGJRkaecvp)" class="om4xkye9x"/><path class="xr2w-0bff"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flagpack:za"} {...others} />);
}

export default Component;
