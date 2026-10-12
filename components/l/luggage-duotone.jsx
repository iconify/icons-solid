import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wpb2ui7ty.css';
import '../../css/b/b6650acng.css';
import '../../css/v/v7yy21tjl.css';
import '../../css/w/wriov4-rf.css';
import '../../css/p/psa1kob_k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wpb2ui7ty"/><path class="b6650acng"/><path class="v7yy21tjl"/><path class="wriov4-rf"/><path class="psa1kob_k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:luggage-duotone"} {...others} />);
}

export default Component;
