import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/om0w2ebyn.css';
import '../../css/e/e1mtzabaw.css';
import '../../css/p/ptkz2pb_u.css';
import '../../css/z/zi1iipb3g.css';
import '../../css/n/noy7d_9ce.css';
import '../../css/i/itl5pv92p.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="om0w2ebyn"/><path class="e1mtzabaw"/><path class="ptkz2pb_u"/><path class="zi1iipb3g"/><path class="noy7d_9ce"/><path class="itl5pv92p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:target-duo"} {...others} />);
}

export default Component;
