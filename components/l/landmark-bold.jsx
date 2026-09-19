import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oykzfc_xp.css';
import '../../css/n/n-pc48b-w.css';
import '../../css/z/z4964bb0u.css';
import '../../css/r/re_v44b9s.css';
import '../../css/e/elygj73or.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="oykzfc_xp"/><path class="n-pc48b-w"/><path class="z4964bb0u"/><path clip-rule="evenodd" class="re_v44b9s"/><path class="elygj73or"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:landmark-bold"} {...others} />);
}

export default Component;
