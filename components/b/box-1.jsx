import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mu2a2galn.css';
import '../../css/n/n_o6seuop.css';
import '../../css/v/v35nnjbuw.css';
import '../../css/a/anjlg6eec.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="mu2a2galn"/><path class="n_o6seuop"/><path class="v35nnjbuw"/><path class="anjlg6eec"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:box-1"} {...others} />);
}

export default Component;
