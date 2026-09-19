import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fa_q54byr.css';
import '../../css/o/oncy5ov1k.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="fa_q54byr"/><path class="oncy5ov1k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:ledger"} {...others} />);
}

export default Component;
