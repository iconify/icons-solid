import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/itpgybcop.css';
import '../../css/e/ewodznbnx.css';
import '../../css/g/g8bh34ovg.css';
import '../../css/h/h8chuobxo.css';
import '../../css/g/glibne2vp.css';
import '../../css/p/p3r0uoj7j.css';
import '../../css/e/er9l5acyj.css';
import '../../css/s/sr_uaacou.css';
import '../../css/i/iynp7sbrt.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="itpgybcop"/><path class="ewodznbnx"/><path class="g8bh34ovg"/><path class="h8chuobxo"/><path class="glibne2vp"/><path class="p3r0uoj7j"/><path class="er9l5acyj"/><path class="sr_uaacou"/><path class="iynp7sbrt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:mac-signal"} {...others} />);
}

export default Component;
