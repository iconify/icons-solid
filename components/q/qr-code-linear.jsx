import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/m5c-lqbgh.css';
import '../../css/n/ni_aolb2y.css';
import '../../css/w/w_i_8jbls.css';
import '../../css/h/h5gugpboa.css';
import '../../css/v/vmgsjob4k.css';
import '../../css/b/bqwacwecr.css';
import '../../css/x/xtlidccog.css';
import '../../css/a/ayxjnlb7y.css';
import '../../css/e/ee19phd6f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="m5c-lqbgh"/><path class="ni_aolb2y"/><path class="w_i_8jbls"/><path class="h5gugpboa"/><path class="vmgsjob4k"/><path class="bqwacwecr"/><path class="xtlidccog"/><path class="ayxjnlb7y"/><path class="ee19phd6f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:qr-code-linear"} {...others} />);
}

export default Component;
