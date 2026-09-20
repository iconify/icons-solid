import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c_id42c9d.css';
import '../../css/i/iqj065bgh.css';
import '../../css/b/b3lwj2bjo.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="c_id42c9d"/><path class="iqj065bgh"/><path clip-rule="evenodd" class="b3lwj2bjo"/><path class="mo5netbri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:flower-bud-off"} {...others} />);
}

export default Component;
