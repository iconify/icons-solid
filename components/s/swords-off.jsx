import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/l/lck5n2bzo.css';
import '../../css/m/mcr0ovfxm.css';
import '../../css/k/k59midc1v.css';
import '../../css/n/ny0_0mbce.css';
import '../../css/u/uwbh46bde.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><g clip-rule="evenodd" class="d2kvgvbvc"><path class="lck5n2bzo"/><path class="mcr0ovfxm"/><path class="k59midc1v"/><path class="ny0_0mbce"/><path class="uwbh46bde"/></g><path class="mo5netbri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:swords-off"} {...others} />);
}

export default Component;
