import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/a70ze4bvi.css';
import '../../css/f/fhl30ybcq.css';
import '../../css/t/trgl8vbcx.css';
import '../../css/j/j43fcpbhp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="a70ze4bvi wm-shadow"/><path class="fhl30ybcq"/><path class="trgl8vbcx"/><path class="j43fcpbhp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:layers"} {...others} />);
}

export default Component;
