import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hjtg70bll.css';
import '../../css/s/scs1-2r1b.css';
import '../../css/a/a5lgl1jmf.css';
import '../../css/j/jd9ch1tiv.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="hjtg70bll"/><path class="scs1-2r1b"/><path class="a5lgl1jmf"/><path class="jd9ch1tiv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:woman-with-veil"} {...others} />);
}

export default Component;
