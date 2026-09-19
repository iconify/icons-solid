import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iysf4jv4i.css';
import '../../css/l/lrx_ag2ld.css';
import '../../css/u/u7alcxwrl.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="iysf4jv4i"/><path class="lrx_ag2ld"/><path class="u7alcxwrl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:crosshairs"} {...others} />);
}

export default Component;
