import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/eckbafr_s.css';
import '../../css/n/npowmohlh.css';
import '../../css/b/b-20_gbed.css';
import '../../css/g/g8wvjxrez.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="eckbafr_s"/><path class="npowmohlh"/><path class="b-20_gbed"/><path class="g8wvjxrez"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:man-wrestling"} {...others} />);
}

export default Component;
