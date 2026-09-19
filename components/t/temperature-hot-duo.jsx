import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eplcf-iln.css';
import '../../css/v/vlm9pz21l.css';
import '../../css/d/d1b_fg1ku.css';
import '../../css/w/wmvfu1bsb.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="eplcf-iln"/><path class="vlm9pz21l"/><path class="d1b_fg1ku"/><path class="wmvfu1bsb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:temperature-hot-duo"} {...others} />);
}

export default Component;
