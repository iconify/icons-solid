import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/n/no8v9mbnm.css';
import '../../css/k/k5m78ub-z.css';
import '../../css/j/j_z-_q7lb.css';
import '../../css/q/qrotbkgro.css';
import '../../css/x/x53psybyw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="no8v9mbnm wm-shadow"/><path class="k5m78ub-z wm-shadow"/><path class="j_z-_q7lb"/><path class="qrotbkgro"/><path class="x53psybyw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:save-all"} {...others} />);
}

export default Component;
