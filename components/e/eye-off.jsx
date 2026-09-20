import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c8sdqccfu.css';
import '../../css/p/ppl1dfbol.css';
import '../../css/l/lxnrhrbcb.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="c8sdqccfu"/><path clip-rule="evenodd" class="ppl1dfbol"/><path class="lxnrhrbcb"/><path class="mo5netbri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:eye-off"} {...others} />);
}

export default Component;
