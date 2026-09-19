import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/t/tgx-x8bou.css';
import '../../css/b/bent-3bsb.css';
import '../../css/e/efo5bjbca.css';
import '../../css/h/ha_idlbah.css';
import '../../css/s/s4dj2cx9k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="tgx-x8bou"/><path class="bent-3bsb"/><path class="efo5bjbca"/><path class="ha_idlbah"/><path class="s4dj2cx9k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:electric-tower-01"} {...others} />);
}

export default Component;
