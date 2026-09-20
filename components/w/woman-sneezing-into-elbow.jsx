import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rjype7bxv.css';
import '../../css/z/zuight_1c.css';
import '../../css/v/v1h0tc80k.css';
import '../../css/z/ztuuj7i-c.css';
import '../../css/z/z04drlb1l.css';
import '../../css/r/rgm6lhb4q.css';
import '../../css/k/km_iyubzm.css';
import '../../css/g/ggsu8tn_m.css';
import '../../css/w/wg08686ck.css';
import '../../css/s/sh-t9ccek.css';
import '../../css/u/utv6ymtjf.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="rjype7bxv"/><path class="zuight_1c"/><path class="v1h0tc80k"/><path class="ztuuj7i-c"/><g class="z04drlb1l"><path class="rgm6lhb4q"/><path class="km_iyubzm"/><path class="ggsu8tn_m"/><path class="wg08686ck"/><path class="sh-t9ccek"/><path class="utv6ymtjf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:woman-sneezing-into-elbow"} {...others} />);
}

export default Component;
