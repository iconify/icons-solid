import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lch3s_b1x.css';
import '../../css/w/wqxztlbrk.css';
import '../../css/z/zjouw2d4k.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="lch3s_b1x"/><path class="wqxztlbrk"/><path class="zjouw2d4k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:scooter-duo"} {...others} />);
}

export default Component;
