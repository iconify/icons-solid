import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jeg3zq4og.css';
import '../../css/h/hxyvl_b8f.css';
import '../../css/x/x1r3-hbsx.css';
import '../../css/x/x-go-tinw.css';
import '../../css/z/zsuclwbnx.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="jeg3zq4og"/><path clip-rule="evenodd" class="hxyvl_b8f"/><path class="x1r3-hbsx"/><path class="x-go-tinw"/><path class="zsuclwbnx"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:bluetooth-circle-off"} {...others} />);
}

export default Component;
