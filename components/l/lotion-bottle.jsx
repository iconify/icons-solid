import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xjseyf3om.css';
import '../../css/o/oq1i0rb6n.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="xjseyf3om"/><path class="oq1i0rb6n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:lotion-bottle"} {...others} />);
}

export default Component;
