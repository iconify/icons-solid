import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/z27drdbsa.css';
import '../../css/c/c-tc9slrm.css';
import '../../css/u/u2q7dvd0o.css';
import '../../css/i/i_y-8r_ol.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="z27drdbsa"/><path class="c-tc9slrm"/><path class="u2q7dvd0o"/><path class="i_y-8r_ol"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:ai-book"} {...others} />);
}

export default Component;
