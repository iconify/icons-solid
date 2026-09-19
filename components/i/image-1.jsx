import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l05hwhz0h.css';
import '../../css/j/jygke8bny.css';
import '../../css/v/vr_4k14lh.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><rect class="l05hwhz0h"/><path clip-rule="evenodd" class="jygke8bny"/><path class="vr_4k14lh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:image-1"} {...others} />);
}

export default Component;
