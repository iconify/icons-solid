import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/d/d5x9yms8l.css';
import '../../css/y/yrhvmqbhl.css';
import '../../css/d/dctutx59o.css';
import '../../css/u/ujwc1abvy.css';
import '../../css/k/k0_gd0tpv.css';
import '../../css/h/hufhi7biv.css';
import '../../css/l/lg-r2-bgh.css';
import '../../css/w/wq25oplyd.css';
import '../../css/f/fwc_88bwm.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="d5x9yms8l"/><path class="yrhvmqbhl"/><path class="dctutx59o"/><path class="ujwc1abvy"/><path class="k0_gd0tpv"/><path class="hufhi7biv"/><path class="lg-r2-bgh"/><path class="wq25oplyd"/><path class="fwc_88bwm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:bm"} {...others} />);
}

export default Component;
