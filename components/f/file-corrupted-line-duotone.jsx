import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/e8sr0bcyc.css';
import '../../css/p/pija81m1h.css';
import '../../css/q/q76w7c8rz.css';
import '../../css/f/fwg6wi_3u.css';
import '../../css/x/xe403ub-o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="e8sr0bcyc"/><path class="pija81m1h"/><path class="q76w7c8rz"/><path class="fwg6wi_3u"/><path class="xe403ub-o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:file-corrupted-line-duotone"} {...others} />);
}

export default Component;
