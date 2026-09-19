import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pdew66bsz.css';
import '../../css/u/uobhedcfl.css';
import '../../css/x/xnrzw9mqg.css';
import '../../css/m/mgrnpvbjd.css';
import '../../css/j/jnc7mht3g.css';
import '../../css/y/ycxm_cccw.css';
import '../../css/i/iovc63bai.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="pdew66bsz"/><path class="uobhedcfl"/><path class="xnrzw9mqg"/><linearGradient id="SVGzU71EysQ" x1="59.365" x2="86.825" y1="116.36" y2="99.399" gradientUnits="userSpaceOnUse"><stop offset="0" class="mgrnpvbjd"/><stop offset=".63" class="jnc7mht3g"/><stop offset="1" class="ycxm_cccw"/></linearGradient><path fill="url(#SVGzU71EysQ)" class="iovc63bai"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:flutter"} {...others} />);
}

export default Component;
