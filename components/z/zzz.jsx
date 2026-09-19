import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/chs_xjbuj.css';
import '../../css/f/f9mnbfbtq.css';
import '../../css/b/b8os0f_-m.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="chs_xjbuj"/><path class="f9mnbfbtq"/><path class="b8os0f_-m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:zzz"} {...others} />);
}

export default Component;
