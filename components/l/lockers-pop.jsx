import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/brt534uak.css';
import '../../css/v/vbimoebpm.css';
import '../../css/n/ng71r_bmy.css';
import '../../css/x/x5u5g0w-y.css';
import '../../css/g/gywv6lbro.css';
import '../../css/z/z7iserhjg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="brt534uak"/><path class="vbimoebpm"/><path class="ng71r_bmy"/><path class="x5u5g0w-y"/><path class="gywv6lbro"/><path class="z7iserhjg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:lockers-pop"} {...others} />);
}

export default Component;
