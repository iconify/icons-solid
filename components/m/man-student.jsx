import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r45y58qaa.css';
import '../../css/h/hx50hlb9i.css';
import '../../css/p/pkli7zb5m.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="r45y58qaa"/><path class="hx50hlb9i"/><path class="pkli7zb5m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:man-student"} {...others} />);
}

export default Component;
