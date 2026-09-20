import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uye97lbbq.css';
import '../../css/r/r0ei81btz.css';
import '../../css/m/mgp6kibtq.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="uye97lbbq"/><path clip-rule="evenodd" class="r0ei81btz"/><path clip-rule="evenodd" class="mgp6kibtq"/><path class="mo5netbri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:earth-asia-off"} {...others} />);
}

export default Component;
