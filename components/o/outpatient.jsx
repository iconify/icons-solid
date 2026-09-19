import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uce-bntae.css';
import '../../css/m/moip_4bnz.css';
import '../../css/f/fkcgkpbyg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="uce-bntae"/><path clip-rule="evenodd" class="moip_4bnz"/><path class="fkcgkpbyg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:outpatient"} {...others} />);
}

export default Component;
