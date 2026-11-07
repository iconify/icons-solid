import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/q4quubbkz.css';
import '../../css/e/eupf27bpo.css';
import '../../css/i/iredkutyw.css';
import '../../css/g/g9fm93boy.css';
import '../../css/p/psheptbge.css';
import '../../css/p/p486gvbkz.css';
import '../../css/j/jj8gmw3jw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="q4quubbkz"/><path class="eupf27bpo"/><path class="iredkutyw"/><path class="g9fm93boy"/><path class="psheptbge"/><path class="p486gvbkz"/><path class="jj8gmw3jw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:suspension-bolt-broken"} {...others} />);
}

export default Component;
