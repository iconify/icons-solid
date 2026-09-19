import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uj2mf-b4l.css';
import '../../css/b/bs_q0b_tr.css';
import '../../css/b/bivhugbxq.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="uj2mf-b4l"/><path class="bs_q0b_tr"/><path class="bivhugbxq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:woman-elf"} {...others} />);
}

export default Component;
