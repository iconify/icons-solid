import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b2t6ll18t.css';
import '../../css/l/lvh0zsbby.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="b2t6ll18t"/><path class="lvh0zsbby"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:tired-face"} {...others} />);
}

export default Component;
