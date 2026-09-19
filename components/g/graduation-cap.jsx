import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vwlxb6r1q.css';
import '../../css/i/irjtrsb0s.css';
import '../../css/l/lrijypbor.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="vwlxb6r1q"/><path class="irjtrsb0s"/><path class="lrijypbor"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:graduation-cap"} {...others} />);
}

export default Component;
