import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/okhwmcb0f.css';
import '../../css/v/v2bckkbfc.css';
import '../../css/t/t3uq51uee.css';

const viewBox = {"width":1595,"height":1596};
const content = `<g class="cuyn6tgcc"><path class="okhwmcb0f"/><path class="v2bckkbfc"/><path class="t3uq51uee"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:unicharm"} {...others} />);
}

export default Component;
