import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/apzfpgmid.css';
import '../../css/n/no-o4pb5k.css';
import '../../css/v/vb7qb5boa.css';
import '../../css/n/n8qbuufsn.css';
import '../../css/h/h-5869b5h.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/e/ermbv6b9l.css';
import '../../css/s/sats95d6c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="apzfpgmid"/><path class="no-o4pb5k"/><path class="vb7qb5boa"/><path class="n8qbuufsn"/><path class="h-5869b5h"/><g class="mc2zb0bvp"><path class="ermbv6b9l"/><path class="sats95d6c"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:flashlight-on-bold-duotone"} {...others} />);
}

export default Component;
