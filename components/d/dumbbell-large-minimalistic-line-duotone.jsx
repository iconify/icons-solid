import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/rc_wa302a.css';
import '../../css/y/yhbjiub0q.css';
import '../../css/c/c72m0orqb.css';
import '../../css/c/c7cbc_b8n.css';
import '../../css/z/z_zggnb9w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="rc_wa302a"/><path class="yhbjiub0q"/><path class="c72m0orqb"/><path class="c7cbc_b8n"/><path class="z_zggnb9w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:dumbbell-large-minimalistic-line-duotone"} {...others} />);
}

export default Component;
