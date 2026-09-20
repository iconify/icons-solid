import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/y_xsmq0bc.css';
import '../../css/v/vssu5c7_s.css';
import '../../css/n/n6vmcbbro.css';
import '../../css/q/q55n1xk3r.css';
import '../../css/t/tq7kvx37d.css';
import '../../css/g/g4uzw-b-k.css';
import '../../css/z/z1aqs2_3g.css';
import '../../css/v/vhfiyem-h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="y_xsmq0bc"/><path class="vssu5c7_s"/><path class="n6vmcbbro"/><path class="q55n1xk3r"/><path class="tq7kvx37d"/><path class="g4uzw-b-k"/><path class="z1aqs2_3g"/><path class="vhfiyem-h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:washing-machine-line-duotone"} {...others} />);
}

export default Component;
