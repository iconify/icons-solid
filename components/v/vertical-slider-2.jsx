import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/y/y8-yunbsb.css';
import '../../css/b/br23m8blf.css';
import '../../css/v/vlkb8jvwm.css';
import '../../css/a/a_u4_ybpx.css';
import '../../css/o/onqns01lr.css';
import '../../css/n/nrm1libza.css';
import '../../css/g/go16u_bje.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="y8-yunbsb"/><path class="br23m8blf"/><path class="vlkb8jvwm"/><path class="a_u4_ybpx"/><path class="onqns01lr"/><path class="nrm1libza"/><path class="go16u_bje"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:vertical-slider-2"} {...others} />);
}

export default Component;
