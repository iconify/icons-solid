import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ac3mcvqnf.css';
import '../../css/g/gs1pwqaxr.css';
import '../../css/a/a-n71ub0m.css';
import '../../css/c/cz459mb4d.css';
import '../../css/u/ua--cl_1o.css';
import '../../css/p/pl-f78b8v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ac3mcvqnf"/><path class="gs1pwqaxr"/><path class="a-n71ub0m"/><path class="cz459mb4d"/><path class="ua--cl_1o"/><path class="pl-f78b8v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:award-trophy-1"} {...others} />);
}

export default Component;
