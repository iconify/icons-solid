import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/h_tsn8bxt.css';
import '../../css/h/hrlkjybrs.css';
import '../../css/k/k6xbvzbvu.css';
import '../../css/l/l4cuv_2zm.css';
import '../../css/s/s6i12_bpo.css';
import '../../css/k/kgwbfcbts.css';
import '../../css/r/rid61yb9b.css';
import '../../css/k/ko6o-6b9b.css';
import '../../css/e/ew92mhbfo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><circle class="h_tsn8bxt"/><path class="hrlkjybrs"/><path class="k6xbvzbvu"/><path class="l4cuv_2zm"/><path class="s6i12_bpo"/><path class="kgwbfcbts"/><path class="rid61yb9b"/><path class="ko6o-6b9b"/><path class="ew92mhbfo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:wheel-broken"} {...others} />);
}

export default Component;
