import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kwb1h1bte.css';
import '../../css/r/r_mg9bczp.css';
import '../../css/f/ft7t9cudy.css';
import '../../css/t/tknbxxn2s.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="kwb1h1bte"/><path class="r_mg9bczp"/><path class="ft7t9cudy"/><path class="tknbxxn2s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:man-getting-haircut"} {...others} />);
}

export default Component;
