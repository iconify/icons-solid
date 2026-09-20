import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zedagib6e.css';
import '../../css/h/hc72hrl-j.css';
import '../../css/v/v1h0tc80k.css';
import '../../css/z/ztuuj7i-c.css';
import '../../css/z/z04drlb1l.css';
import '../../css/q/q5wasac_d.css';
import '../../css/m/m0nh1zb3p.css';
import '../../css/k/km_iyubzm.css';
import '../../css/g/ggsu8tn_m.css';
import '../../css/h/hmvg6pimi.css';
import '../../css/w/wg08686ck.css';
import '../../css/h/hen-9jtfv.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="zedagib6e"/><path class="hc72hrl-j"/><path class="v1h0tc80k"/><path class="ztuuj7i-c"/><g class="z04drlb1l"><path class="q5wasac_d"/><path class="m0nh1zb3p"/><path class="km_iyubzm"/><path class="ggsu8tn_m"/><path class="hmvg6pimi"/><path class="wg08686ck"/><path class="hen-9jtfv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:person-sneezing-into-elbow"} {...others} />);
}

export default Component;
