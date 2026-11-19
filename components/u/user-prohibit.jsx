import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kiw9zd1sw.css';
import '../../css/t/tjngfebbg.css';
import '../../css/m/mmr0x_b2r.css';
import '../../css/p/p1tagdbtt.css';
import '../../css/v/v1jbi7bnm.css';
import '../../css/k/kt3ak7b5c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="kiw9zd1sw"/><path class="tjngfebbg"/><path class="mmr0x_b2r"/><path class="p1tagdbtt"/><path class="v1jbi7bnm"/><path class="kt3ak7b5c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:user-prohibit"} {...others} />);
}

export default Component;
