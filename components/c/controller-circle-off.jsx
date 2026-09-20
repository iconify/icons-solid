import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zyhc4ob-x.css';
import '../../css/e/exrhwhtnu.css';
import '../../css/v/vi-yg5enu.css';
import '../../css/t/txlqvcbnr.css';
import '../../css/z/zsuclwbnx.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="cuyn6tgcc"><path class="zyhc4ob-x"/><path clip-rule="evenodd" class="exrhwhtnu"/><path class="vi-yg5enu"/><path class="txlqvcbnr"/><path class="zsuclwbnx"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:controller-circle-off"} {...others} />);
}

export default Component;
