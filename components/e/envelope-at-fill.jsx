import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qdv5h4b9c.css';
import '../../css/z/zv7m6ob8p.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="qdv5h4b9c"/><path class="zv7m6ob8p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:envelope-at-fill"} {...others} />);
}

export default Component;
