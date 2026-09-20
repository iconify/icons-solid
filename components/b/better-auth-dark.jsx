import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qrfysjbiw.css';
import '../../css/x/xvyoppupm.css';
import '../../css/b/bkp-5qvjz.css';
import '../../css/q/q5nvadb_s.css';

const viewBox = {"width":500,"height":500};
const content = `<g class="ft5dv1b6b"><path class="qrfysjbiw"/><path class="xvyoppupm"/><path class="bkp-5qvjz"/><path class="q5nvadb_s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:better-auth-dark"} {...others} />);
}

export default Component;
