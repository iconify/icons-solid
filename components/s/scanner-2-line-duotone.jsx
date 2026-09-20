import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/kruqtab-m.css';
import '../../css/i/i8utatbio.css';
import '../../css/v/vepd3ytoq.css';
import '../../css/u/un-u7xpwr.css';
import '../../css/q/qpmqs1x2s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="kruqtab-m"/><path class="i8utatbio"/><path class="vepd3ytoq"/><path class="un-u7xpwr"/><path class="qpmqs1x2s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:scanner-2-line-duotone"} {...others} />);
}

export default Component;
