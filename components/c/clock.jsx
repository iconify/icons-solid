import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/dj8ojob5r.css';
import '../../css/c/ces2_x3wl.css';

const viewBox = {"width":17,"height":17};
const content = `<g class="n1lsf0bnc"><path class="dj8ojob5r"/><path class="ces2_x3wl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:clock"} {...others} />);
}

export default Component;
