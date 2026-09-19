import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ew36xlbmo.css';
import '../../css/d/dk5h7lbfd.css';
import '../../css/l/lgvo6lbhk.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="ew36xlbmo"/><path class="dk5h7lbfd"/><path class="lgvo6lbhk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:santa-claus"} {...others} />);
}

export default Component;
