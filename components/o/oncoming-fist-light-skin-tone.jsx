import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ktvrq9a1c.css';
import '../../css/h/hq1bfqbrr.css';
import '../../css/d/dsb-5jbee.css';
import '../../css/k/kc2o_cchs.css';
import '../../css/v/vd_ebw-va.css';
import '../../css/o/oy1aszq3p.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/n/n59tq2iag.css';
import '../../css/n/n_l8dktof.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="ktvrq9a1c"/><g class="hq1bfqbrr"><path class="dsb-5jbee"/><path class="kc2o_cchs"/><path class="vd_ebw-va"/><path class="oy1aszq3p"/></g><g class="jn8qy4bru"><path class="n59tq2iag"/><path class="n_l8dktof"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:oncoming-fist-light-skin-tone"} {...others} />);
}

export default Component;
