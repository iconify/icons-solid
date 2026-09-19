import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/aw66flb6x.css';
import '../../css/p/p8arhnbml.css';
import '../../css/c/cqkfiyb4q.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="aw66flb6x"/><path class="p8arhnbml"/><path class="cqkfiyb4q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:face-exhaling"} {...others} />);
}

export default Component;
