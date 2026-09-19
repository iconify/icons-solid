import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/d/dt4y0wldq.css';
import '../../css/w/w52sjdwjn.css';
import '../../css/u/ua2rz5bkn.css';
import '../../css/x/x_27_2b3h.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="dt4y0wldq"/><path class="w52sjdwjn"/><path class="ua2rz5bkn"/><path class="x_27_2b3h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:sliders-outline"} {...others} />);
}

export default Component;
