import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x_rsnt1on.css';
import '../../css/r/rwwp-6wln.css';
import '../../css/c/cc_d832mf.css';
import '../../css/y/yk99yrbdt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="x_rsnt1on"/><path class="rwwp-6wln"/><path class="cc_d832mf"/><path class="yk99yrbdt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:balloons"} {...others} />);
}

export default Component;
