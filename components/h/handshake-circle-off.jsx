import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dgp5bp7mg.css';
import '../../css/x/x4mv-7s-h.css';
import '../../css/y/ywrsrb7ne.css';
import '../../css/l/lsen5obiz.css';
import '../../css/z/zsuclwbnx.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="dgp5bp7mg"/><path clip-rule="evenodd" class="x4mv-7s-h"/><path class="ywrsrb7ne"/><path clip-rule="evenodd" class="lsen5obiz"/><path class="zsuclwbnx"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:handshake-circle-off"} {...others} />);
}

export default Component;
