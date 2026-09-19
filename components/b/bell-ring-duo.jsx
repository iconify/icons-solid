import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lquxq_0-b.css';
import '../../css/e/eh_m-vi9v.css';
import '../../css/c/comdxum3w.css';
import '../../css/k/kye1psbcx.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="lquxq_0-b"/><path class="eh_m-vi9v"/><path class="comdxum3w"/><path class="kye1psbcx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:bell-ring-duo"} {...others} />);
}

export default Component;
