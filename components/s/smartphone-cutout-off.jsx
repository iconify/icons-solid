import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mwbwo4bgu.css';
import '../../css/l/lft_p3rrx.css';
import '../../css/d/dn2n-ml1t.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="mwbwo4bgu"/><path clip-rule="evenodd" class="lft_p3rrx"/><path clip-rule="evenodd" class="dn2n-ml1t"/><path class="mo5netbri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:smartphone-cutout-off"} {...others} />);
}

export default Component;
