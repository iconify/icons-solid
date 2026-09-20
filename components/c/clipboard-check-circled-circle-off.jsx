import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ey2r02nhy.css';
import '../../css/k/kunsb_bgc.css';
import '../../css/t/tx27g4bbc.css';
import '../../css/g/g9geo6v2w.css';
import '../../css/z/zsuclwbnx.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ey2r02nhy"/><path clip-rule="evenodd" class="kunsb_bgc"/><path clip-rule="evenodd" class="tx27g4bbc"/><path clip-rule="evenodd" class="g9geo6v2w"/><path class="zsuclwbnx"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:clipboard-check-circled-circle-off"} {...others} />);
}

export default Component;
