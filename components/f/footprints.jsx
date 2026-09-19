import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/um8_dl0cx.css';
import '../../css/w/w8z8pgbyr.css';
import '../../css/q/q3rujdbek.css';
import '../../css/b/b376ql6hm.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="um8_dl0cx"/><path class="w8z8pgbyr"/><path class="q3rujdbek"/><path class="b376ql6hm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:footprints"} {...others} />);
}

export default Component;
