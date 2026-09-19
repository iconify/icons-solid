import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f_fmg342a.css';
import '../../css/w/wvmwq-yxg.css';
import '../../css/u/ua-ukmbpm.css';
import '../../css/c/c019ivbij.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="f_fmg342a"/><path clip-rule="evenodd" class="wvmwq-yxg"/><path class="ua-ukmbpm"/><path clip-rule="evenodd" class="c019ivbij"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:race-car-outline"} {...others} />);
}

export default Component;
