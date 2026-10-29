import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/n/nri-78lca.css';
import '../../css/r/r3e_eni1w.css';
import '../../css/v/vze4wuf6n.css';
import '../../css/b/bt4eanb_m.css';
import '../../css/e/ee72xe_hx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="nri-78lca wm-deco"/><path class="r3e_eni1w wm-deco"/><path class="vze4wuf6n wm-deco"/><path class="bt4eanb_m wm-k"/><path class="ee72xe_hx wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:building-2-blueprint"} {...others} />);
}

export default Component;
