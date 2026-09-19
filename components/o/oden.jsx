import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/na8hi9wxq.css';
import '../../css/u/ug_z8_zom.css';
import '../../css/l/l74lmhbvl.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="na8hi9wxq"/><path class="ug_z8_zom"/><path class="l74lmhbvl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:oden"} {...others} />);
}

export default Component;
