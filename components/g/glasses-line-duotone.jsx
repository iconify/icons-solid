import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pl16qnbxx.css';
import '../../css/z/z5v2vbbdr.css';
import '../../css/m/mm1j_hb_r.css';
import '../../css/s/stegnnftg.css';
import '../../css/j/jbi5ixbej.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><circle class="pl16qnbxx"/><circle class="z5v2vbbdr"/><path class="mm1j_hb_r"/><path class="stegnnftg"/><path class="jbi5ixbej"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:glasses-line-duotone"} {...others} />);
}

export default Component;
