import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c76mmpxmq.css';
import '../../css/f/fmdayqaig.css';
import '../../css/z/zr4xh6bhu.css';
import '../../css/f/f5ugk_b_x.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="c76mmpxmq"/><path class="fmdayqaig"/><path class="zr4xh6bhu"/><path class="f5ugk_b_x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:headset"} {...others} />);
}

export default Component;
