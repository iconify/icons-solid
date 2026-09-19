import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/ra_dfpp6b.css';
import '../../css/z/zdg6l3u0q.css';
import '../../css/m/mzej6wbap.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="ra_dfpp6b"/><path class="zdg6l3u0q"/><path class="mzej6wbap"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:map"} {...others} />);
}

export default Component;
