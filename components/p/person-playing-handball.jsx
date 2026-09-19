import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g_8l2sbgi.css';
import '../../css/h/h50xhsmuu.css';
import '../../css/a/aw4i6osni.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="g_8l2sbgi"/><path class="h50xhsmuu"/><path class="aw4i6osni"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:person-playing-handball"} {...others} />);
}

export default Component;
