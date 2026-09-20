import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o4-q1erbf.css';
import '../../css/n/n--4sxbbt.css';
import '../../css/k/kr4df7b3d.css';
import '../../css/m/ma1l1zb8o.css';
import '../../css/g/g5wm2-4yt.css';
import '../../css/q/qtv71wb4m.css';

const viewBox = {"width":1080,"height":1080};
const content = `<path class="o4-q1erbf"/><path class="n--4sxbbt"/><path class="kr4df7b3d"/><path class="ma1l1zb8o"/><path class="g5wm2-4yt"/><path class="qtv71wb4m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:leedlime"} {...others} />);
}

export default Component;
