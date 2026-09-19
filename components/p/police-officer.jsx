import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o1r682ogy.css';
import '../../css/n/ntop3cclr.css';
import '../../css/q/qnl7b1b9c.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="o1r682ogy"/><path class="ntop3cclr"/><path class="qnl7b1b9c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:police-officer"} {...others} />);
}

export default Component;
