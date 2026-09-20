import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pxstb9b1h.css';
import '../../css/w/wh2k3y_4b.css';
import '../../css/c/cn6m43jim.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="pxstb9b1h"/><path clip-rule="evenodd" class="wh2k3y_4b"/><path clip-rule="evenodd" class="cn6m43jim"/><path class="mo5netbri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:credit-card-off"} {...others} />);
}

export default Component;
