import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mvkg65bra.css';
import '../../css/q/q4uag0s6b.css';
import '../../css/s/sukxcv5dh.css';
import '../../css/m/m0z2utz5z.css';
import '../../css/p/p79r-ubnk.css';
import '../../css/z/zsuclwbnx.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="mvkg65bra"/><path clip-rule="evenodd" class="q4uag0s6b"/><path clip-rule="evenodd" class="sukxcv5dh"/><path clip-rule="evenodd" class="m0z2utz5z"/><path clip-rule="evenodd" class="p79r-ubnk"/><path class="zsuclwbnx"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:watch-circle-off"} {...others} />);
}

export default Component;
