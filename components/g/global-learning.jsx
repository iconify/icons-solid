import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vfo-vwb5m.css';
import '../../css/g/g45pv6ben.css';
import '../../css/m/m_x6dvbcz.css';
import '../../css/i/iranqacbe.css';
import '../../css/o/o5ztpwgds.css';
import '../../css/l/l1dadsbto.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="vfo-vwb5m"/><path class="g45pv6ben"/><path class="m_x6dvbcz"/><path class="iranqacbe"/><path class="o5ztpwgds"/><path class="l1dadsbto"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:global-learning"} {...others} />);
}

export default Component;
