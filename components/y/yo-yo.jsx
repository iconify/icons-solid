import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ut5kte8hs.css';
import '../../css/j/jao5a9beq.css';
import '../../css/k/kxbxmwbhq.css';
import '../../css/z/z2zy43d1o.css';
import '../../css/x/xf_984b9o.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="ut5kte8hs"/><path class="jao5a9beq"/><path class="kxbxmwbhq"/><path class="z2zy43d1o"/><path class="xf_984b9o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:yo-yo"} {...others} />);
}

export default Component;
