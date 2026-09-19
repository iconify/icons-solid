import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t-cionbyr.css';
import '../../css/c/c4io32bfc.css';
import '../../css/p/pg0ntdb4v.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="t-cionbyr"/><path class="c4io32bfc"/><path class="pg0ntdb4v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:hamsa"} {...others} />);
}

export default Component;
