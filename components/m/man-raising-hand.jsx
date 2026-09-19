import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f2heh2xxv.css';
import '../../css/j/jvvjw5_eb.css';
import '../../css/s/snapa_96j.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="f2heh2xxv"/><path class="jvvjw5_eb"/><path class="snapa_96j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:man-raising-hand"} {...others} />);
}

export default Component;
