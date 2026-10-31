import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/a/ajv59sbrv.css';
import '../../css/x/xz_sjobcx.css';
import '../../css/m/mhnucdgjk.css';
import '../../css/a/a9nsoqrat.css';
import '../../css/e/epopkxklw.css';
import '../../css/t/tyckk9bhd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGmY1Rsbtx" x1="9.16" x2="15.16" y1="2" y2="22.33" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGmY1Rsbtx)" class="ajv59sbrv"/><path class="wm-shine xz_sjobcx"/><path class="mhnucdgjk wm-shine"/><path class="a9nsoqrat wm-shine"/><path class="epopkxklw wm-shine"/><path class="tyckk9bhd wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:tag"} {...others} />);
}

export default Component;
