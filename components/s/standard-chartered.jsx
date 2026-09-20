import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mcixzjbbg.css';
import '../../css/q/qm1os7wyx.css';
import '../../css/l/llumy86rg.css';
import '../../css/b/br4x3j_5c.css';

const viewBox = {"width":280,"height":110};
const content = `<g class="ft5dv1b6b"><path class="mcixzjbbg"/><path class="qm1os7wyx"/><path class="llumy86rg"/><path class="br4x3j_5c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:standard-chartered"} {...others} />);
}

export default Component;
