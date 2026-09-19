import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a5pnuusxy.css';
import '../../css/b/blfm17nyz.css';
import '../../css/j/jfvktnb6g.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="a5pnuusxy"/><path class="blfm17nyz"/><path class="jfvktnb6g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:woman-gesturing-ok"} {...others} />);
}

export default Component;
