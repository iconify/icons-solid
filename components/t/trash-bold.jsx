import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v8naxbc7h.css';
import '../../css/m/mh00jacot.css';
import '../../css/t/tc_5umbee.css';
import '../../css/u/u2-wo9b_m.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="v8naxbc7h"/><path class="mh00jacot"/><path class="tc_5umbee"/><path class="u2-wo9b_m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:trash-bold"} {...others} />);
}

export default Component;
