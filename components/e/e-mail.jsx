import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rfkp5kh0x.css';
import '../../css/b/betdo5bqj.css';
import '../../css/b/bb5murbun.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="rfkp5kh0x"/><path class="betdo5bqj"/><path class="bb5murbun"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:e-mail"} {...others} />);
}

export default Component;
