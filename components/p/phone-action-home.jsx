import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g91n52bob.css';
import '../../css/w/w5nvrghin.css';
import '../../css/v/vyd_y9bkq.css';
import '../../css/r/ro40wx8nf.css';
import '../../css/x/xcv5vac0z.css';
import '../../css/t/tg-w3fbfz.css';
import '../../css/e/e24gebdti.css';
import '../../css/q/qqa0rshgr.css';
import '../../css/l/lup347twb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="g91n52bob"/><path class="w5nvrghin"/><path class="vyd_y9bkq"/><path class="ro40wx8nf"/><path class="xcv5vac0z"/><path class="tg-w3fbfz"/><path class="e24gebdti"/><path class="qqa0rshgr"/><path class="lup347twb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:phone-action-home"} {...others} />);
}

export default Component;
