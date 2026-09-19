import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i0or3xbtg.css';
import '../../css/t/tl-llyxxg.css';
import '../../css/g/gllij1bxp.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="i0or3xbtg"/><path class="tl-llyxxg"/><path class="gllij1bxp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:houses"} {...others} />);
}

export default Component;
