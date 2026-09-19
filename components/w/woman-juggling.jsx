import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e0vcw070c.css';
import '../../css/p/pdrla7blb.css';
import '../../css/m/muis69b4s.css';
import '../../css/t/t2nxnvbtj.css';
import '../../css/v/v68_z0ncc.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="e0vcw070c"/><path class="pdrla7blb"/><path class="muis69b4s"/><path class="t2nxnvbtj"/><path class="v68_z0ncc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:woman-juggling"} {...others} />);
}

export default Component;
