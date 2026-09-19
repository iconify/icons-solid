import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nn5mlkxwd.css';
import '../../css/j/jt9uwcc7h.css';
import '../../css/o/oolf1cc2n.css';
import '../../css/k/kmx1f_7vl.css';
import '../../css/c/c2riqyb9o.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="nn5mlkxwd"/><path class="jt9uwcc7h"/><path class="oolf1cc2n"/><path class="kmx1f_7vl"/><path class="c2riqyb9o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:sunset-1"} {...others} />);
}

export default Component;
