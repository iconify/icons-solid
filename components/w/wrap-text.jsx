import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/o/ovfdjjxgv.css';
import '../../css/q/qhh-wkbeu.css';
import '../../css/z/zrqy1492b.css';
import '../../css/c/cn354z4up.css';
import '../../css/a/ai8y16b_b.css';
import '../../css/v/vcqmanb4r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="ovfdjjxgv wm-shadow"/><path class="qhh-wkbeu"/><path class="zrqy1492b"/><path class="cn354z4up"/><path class="ai8y16b_b wm-shine"/><path class="vcqmanb4r wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:wrap-text"} {...others} />);
}

export default Component;
