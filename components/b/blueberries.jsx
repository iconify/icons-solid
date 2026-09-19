import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w5lxihbaq.css';
import '../../css/i/i90m0kb6m.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="w5lxihbaq"/><path class="i90m0kb6m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:blueberries"} {...others} />);
}

export default Component;
