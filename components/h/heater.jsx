import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/ciz7-jbxb.css';
import '../../css/i/i0xmrf2hw.css';
import '../../css/o/oeg0rqs_p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect class="ciz7-jbxb"/><rect class="i0xmrf2hw"/><path class="oeg0rqs_p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:heater"} {...others} />);
}

export default Component;
