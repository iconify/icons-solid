import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r2i4hcc4h.css';
import '../../css/r/r-luteblc.css';
import '../../css/c/czfe36bit.css';
import '../../css/r/rb_ywng4r.css';
import '../../css/z/zsuclwbnx.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="cuyn6tgcc"><path class="r2i4hcc4h"/><path class="r-luteblc"/><path class="czfe36bit"/><path class="rb_ywng4r"/><path class="zsuclwbnx"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:angle-left-circle-off"} {...others} />);
}

export default Component;
