import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/psv_8pbss.css';
import '../../css/i/i18_wxbzs.css';
import '../../css/y/y2q3s8nmt.css';
import '../../css/r/r__bygk8c.css';
import '../../css/i/id3g03--h.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="psv_8pbss"/><path clip-rule="evenodd" class="i18_wxbzs"/><path clip-rule="evenodd" class="y2q3s8nmt"/><path class="r__bygk8c"/><path class="id3g03--h"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:loop-plus-circle"} {...others} />);
}

export default Component;
