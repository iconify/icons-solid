import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qa3q44xuv.css';
import '../../css/u/u_nwqzbhk.css';
import '../../css/q/q9pr91bjz.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="qa3q44xuv"/><path class="u_nwqzbhk"/><path clip-rule="evenodd" class="q9pr91bjz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:pen-fountain"} {...others} />);
}

export default Component;
