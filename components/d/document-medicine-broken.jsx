import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/d-3h37-ms.css';
import '../../css/r/ruv56nblh.css';
import '../../css/b/byonj9b2c.css';
import '../../css/h/h4m9tpedx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="d-3h37-ms"/><path class="ruv56nblh"/><path class="byonj9b2c"/><path class="h4m9tpedx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:document-medicine-broken"} {...others} />);
}

export default Component;
