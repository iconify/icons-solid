import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/knpjr7j2q.css';
import '../../css/h/h8ksfzb1h.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="knpjr7j2q"/><path class="h8ksfzb1h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:arrow-level-bold"} {...others} />);
}

export default Component;
