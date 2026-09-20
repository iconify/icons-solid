import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/shu3xdl9q.css';
import '../../css/v/v90gbqbox.css';
import '../../css/h/h_tsn8bxt.css';
import '../../css/h/hrlkjybrs.css';
import '../../css/k/k6xbvzbvu.css';
import '../../css/l/l4cuv_2zm.css';
import '../../css/s/s6i12_bpo.css';
import '../../css/k/kgwbfcbts.css';
import '../../css/r/rid61yb9b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><circle class="shu3xdl9q"/><circle class="v90gbqbox"/><circle class="h_tsn8bxt"/><path class="hrlkjybrs"/><path class="k6xbvzbvu"/><path class="l4cuv_2zm"/><path class="s6i12_bpo"/><path class="kgwbfcbts"/><path class="rid61yb9b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:wheel-linear"} {...others} />);
}

export default Component;
