import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rw23uxbfk.css';
import '../../css/d/dy1u4_bpm.css';
import '../../css/i/ijbqnrrlq.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="rw23uxbfk"/><path class="dy1u4_bpm"/><path class="ijbqnrrlq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:person-tipping-hand"} {...others} />);
}

export default Component;
