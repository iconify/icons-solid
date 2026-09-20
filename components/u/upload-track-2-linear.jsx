import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dhsvhev9z.css';
import '../../css/x/x6tlt5s8q.css';
import '../../css/y/ykkyycbio.css';
import '../../css/j/jd0tvyj1e.css';
import '../../css/n/n-y7-h-tz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="dhsvhev9z"/><circle class="x6tlt5s8q"/><path class="ykkyycbio"/><path class="jd0tvyj1e"/><path class="n-y7-h-tz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:upload-track-2-linear"} {...others} />);
}

export default Component;
