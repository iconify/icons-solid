import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n9-wavbjf.css';
import '../../css/e/enx0swbug.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="n9-wavbjf"/><path class="enx0swbug"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:breast-feeding"} {...others} />);
}

export default Component;
