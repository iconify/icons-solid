import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/izvpq7blu.css';
import '../../css/z/zo4o8_dca.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="izvpq7blu"/><path class="zo4o8_dca"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:turtle"} {...others} />);
}

export default Component;
