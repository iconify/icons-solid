import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x0b636bxv.css';
import '../../css/f/ffhsbub3k.css';
import '../../css/n/no-9i5btz.css';
import '../../css/d/d8-4deqlm.css';
import '../../css/v/v_t7k-5rb.css';
import '../../css/e/e3oyupbxq.css';
import '../../css/r/rep5utbaa.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="x0b636bxv"/><path class="ffhsbub3k"/><path class="no-9i5btz"/><path class="d8-4deqlm"/><path class="v_t7k-5rb"/><path class="e3oyupbxq"/><path class="rep5utbaa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:graph-dot"} {...others} />);
}

export default Component;
