import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/ijnvt0btl.css';
import '../../css/d/dtj43q5cf.css';
import '../../css/x/x02i6wbpa.css';
import '../../css/a/avpk5oscq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ijnvt0btl"/><path class="dtj43q5cf"/><path class="x02i6wbpa"/><rect class="avpk5oscq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:transmission-square-linear"} {...others} />);
}

export default Component;
