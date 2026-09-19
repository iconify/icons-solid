import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m-2eksdvx.css';
import '../../css/j/j53yb7_dq.css';
import '../../css/d/dcx_pp3cp.css';
import '../../css/k/k--9gdclz.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="m-2eksdvx"/><path class="j53yb7_dq"/><path clip-rule="evenodd" class="dcx_pp3cp"/><path class="k--9gdclz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:mushroom-duo"} {...others} />);
}

export default Component;
