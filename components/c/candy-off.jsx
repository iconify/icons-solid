import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/odc_d4b3c.css';
import '../../css/m/mmojxpw0i.css';
import '../../css/t/tbi_u1bpw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="odc_d4b3c"/><path class="mmojxpw0i"/><path class="tbi_u1bpw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:candy-off"} {...others} />);
}

export default Component;
