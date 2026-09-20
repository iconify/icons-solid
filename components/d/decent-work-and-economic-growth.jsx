import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r1h43q12n.css';
import '../../css/r/ruikhdc3c.css';
import '../../css/r/r_v4jxbyj.css';
import '../../css/s/sozdzabhh.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="r1h43q12n"/><path class="ruikhdc3c"/><path class="r_v4jxbyj"/><path class="sozdzabhh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:decent-work-and-economic-growth"} {...others} />);
}

export default Component;
