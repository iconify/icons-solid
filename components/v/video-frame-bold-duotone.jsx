import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g2g1fobjj.css';
import '../../css/h/hzvr7fbrg.css';
import '../../css/g/ge110bv7a.css';
import '../../css/o/ontfdti2i.css';
import '../../css/p/pehj05ikz.css';
import '../../css/k/kkdkqnkkr.css';
import '../../css/p/pz_4vpxto.css';
import '../../css/p/pdl1zj3gt.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/j/j1ig29b4m.css';
import '../../css/a/ayoh-_bxl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="g2g1fobjj"/><path class="hzvr7fbrg"/><path class="ge110bv7a"/><path class="ontfdti2i"/><path class="pehj05ikz"/><path class="kkdkqnkkr"/><path class="pz_4vpxto"/><path class="pdl1zj3gt"/><g class="mc2zb0bvp"><path class="j1ig29b4m"/><path class="ayoh-_bxl"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:video-frame-bold-duotone"} {...others} />);
}

export default Component;
