import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wxtbecsfe.css';
import '../../css/y/y56l_ibqi.css';
import '../../css/j/jpb8jlyra.css';
import '../../css/a/awvi_q3yp.css';
import '../../css/b/bmgfzmb3h.css';
import '../../css/j/jf9awjb5g.css';
import '../../css/r/rotl5wbpk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wm-k wxtbecsfe"/><path class="wm-s y56l_ibqi"/><path class="jpb8jlyra wm-k"/><path class="awvi_q3yp wm-s"/><path class="bmgfzmb3h wm-shadow"/><path class="jf9awjb5g wm-shine"/><path class="rotl5wbpk wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:red-envelope"} {...others} />);
}

export default Component;
