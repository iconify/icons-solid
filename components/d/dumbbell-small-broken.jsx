import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/s46x_lt4e.css';
import '../../css/t/t507ytbah.css';
import '../../css/t/tsn_dsvtb.css';
import '../../css/b/b4j2ribvr.css';
import '../../css/r/rlttj4b8m.css';
import '../../css/m/mh8rzrbvp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="s46x_lt4e"/><path class="t507ytbah"/><path class="tsn_dsvtb"/><path class="b4j2ribvr"/><path class="rlttj4b8m"/><path class="mh8rzrbvp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:dumbbell-small-broken"} {...others} />);
}

export default Component;
