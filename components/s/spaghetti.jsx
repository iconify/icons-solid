import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ir6g6mb-h.css';
import '../../css/p/p0dbfhb3v.css';
import '../../css/m/mltui_b5w.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="ir6g6mb-h"/><path class="p0dbfhb3v"/><path class="mltui_b5w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:spaghetti"} {...others} />);
}

export default Component;
