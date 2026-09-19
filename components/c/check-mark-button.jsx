import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h_bhhd9ki.css';
import '../../css/u/uru88vgdy.css';
import '../../css/l/lms1l_bwk.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="h_bhhd9ki"/><path class="uru88vgdy"/><path class="lms1l_bwk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:check-mark-button"} {...others} />);
}

export default Component;
