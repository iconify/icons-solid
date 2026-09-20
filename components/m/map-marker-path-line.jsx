import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jkzcylb3u.css';
import '../../css/m/mmtc1hr0r.css';
import '../../css/u/u24fbtb3s.css';
import '../../css/p/p40v0gbuu.css';
import '../../css/e/eox5sonav.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="jkzcylb3u"/><circle class="mmtc1hr0r"/><circle class="u24fbtb3s"/><path class="p40v0gbuu"/><circle class="eox5sonav"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:map-marker-path-line"} {...others} />);
}

export default Component;
