import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/p/pnrwv1k3y.css';
import '../../css/r/r1gakrb_k.css';
import '../../css/u/u4z16-b0r.css';
import '../../css/b/b8kixvbbu.css';
import '../../css/c/ccyypsbxl.css';
import '../../css/x/xnxop1bzw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="pnrwv1k3y wm-shadow"/><path class="r1gakrb_k"/><path class="u4z16-b0r"/><path class="b8kixvbbu"/><path class="ccyypsbxl"/><path class="xnxop1bzw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:hourglass"} {...others} />);
}

export default Component;
