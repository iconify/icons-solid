import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rr4lywbge.css';
import '../../css/l/lrw14ub0z.css';
import '../../css/g/gytayk9aj.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="rr4lywbge"/><path class="lrw14ub0z"/><path class="gytayk9aj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:grin-tears-duo"} {...others} />);
}

export default Component;
