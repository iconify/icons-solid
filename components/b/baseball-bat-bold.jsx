import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u9pi01b-p.css';
import '../../css/c/cewtkj5-p.css';
import '../../css/t/tu2vxvb9y.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="u9pi01b-p"/><path class="cewtkj5-p"/><path class="tu2vxvb9y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:baseball-bat-bold"} {...others} />);
}

export default Component;
