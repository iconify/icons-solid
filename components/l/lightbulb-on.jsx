import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xnhytrbts.css';
import '../../css/c/cl7mqkzrd.css';
import '../../css/k/kgl-yytwl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect class="xnhytrbts"/><path class="cl7mqkzrd"/><path class="kgl-yytwl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:lightbulb-on"} {...others} />);
}

export default Component;
