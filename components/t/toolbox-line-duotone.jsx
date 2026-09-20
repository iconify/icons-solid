import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/rsuy55zpm.css';
import '../../css/l/lmpp-9bcp.css';
import '../../css/d/dqpwrsbdu.css';
import '../../css/d/d07yzab6g.css';
import '../../css/q/qj5yks32a.css';
import '../../css/x/x_76f06mb.css';
import '../../css/r/rusk8leef.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="rsuy55zpm"/><path class="lmpp-9bcp"/><path class="dqpwrsbdu"/><path class="d07yzab6g"/><path class="qj5yks32a"/><path class="x_76f06mb"/><rect transform="rotate(-90 2 18.051)" class="rusk8leef"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:toolbox-line-duotone"} {...others} />);
}

export default Component;
