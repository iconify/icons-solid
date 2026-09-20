import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aizdbmpfr.css';
import '../../css/m/mco_cxbks.css';
import '../../css/q/q9_270j0f.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="aizdbmpfr"/><path class="mco_cxbks"/><path class="q9_270j0f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:quality-education-flat"} {...others} />);
}

export default Component;
