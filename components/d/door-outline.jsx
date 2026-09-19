import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/la-ygdc8c.css';
import '../../css/p/pah5iracu.css';
import '../../css/y/yo9a9t66o.css';
import '../../css/x/xf-_rccam.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="la-ygdc8c"/><path clip-rule="evenodd" class="pah5iracu"/><path class="yo9a9t66o"/><path clip-rule="evenodd" class="xf-_rccam"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:door-outline"} {...others} />);
}

export default Component;
