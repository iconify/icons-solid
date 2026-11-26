import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o58hkebvg.css';
import '../../css/x/x9thszb4o.css';
import '../../css/a/akl9-yb_w.css';
import '../../css/h/h_pj5smul.css';
import '../../css/u/ulce9lb7t.css';
import '../../css/e/ez1fnabsi.css';
import '../../css/p/pa_z_5gyb.css';
import '../../css/x/xho221b0b.css';
import '../../css/h/h88m7gfkm.css';
import '../../css/e/eu631vfkc.css';

const viewBox = {"width":512,"height":512};
const content = `<g class="o58hkebvg"><path class="x9thszb4o"/><path class="akl9-yb_w"/><path class="h_pj5smul"/><path class="ulce9lb7t"/><path class="ez1fnabsi"/><path class="pa_z_5gyb"/><path class="xho221b0b"/><path class="h88m7gfkm"/><path class="eu631vfkc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"xero-emoji:white-cane"} {...others} />);
}

export default Component;
