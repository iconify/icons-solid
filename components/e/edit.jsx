import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/k/kye_jcb4z.css';
import '../../css/e/ek-ps2bhe.css';
import '../../css/m/m7ahgsbvn.css';
import '../../css/i/i4fsizq1g.css';
import '../../css/t/t13yclzzf.css';
import '../../css/k/kcnlfdcgl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="kye_jcb4z wm-shadow"/><path class="ek-ps2bhe"/><path class="m7ahgsbvn"/><path class="i4fsizq1g"/><path class="t13yclzzf"/><path class="kcnlfdcgl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:edit"} {...others} />);
}

export default Component;
