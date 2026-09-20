import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pe1_8wbka.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/k/k0sy36bsy.css';
import '../../css/t/tpzwl1bnq.css';
import '../../css/g/g-ond2cfc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="pe1_8wbka"/><g class="mc2zb0bvp"><path class="k0sy36bsy"/><path class="tpzwl1bnq"/><path class="g-ond2cfc"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:dumbbell-large-bold-duotone"} {...others} />);
}

export default Component;
