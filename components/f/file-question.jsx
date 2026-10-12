import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/crsplxbrf.css';
import '../../css/t/txt6vub3z.css';
import '../../css/i/iz8h-wb5s.css';
import '../../css/s/sos1yebgd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="crsplxbrf"/><path class="txt6vub3z"/><path class="iz8h-wb5s"/><path class="sos1yebgd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:file-question"} {...others} />);
}

export default Component;
