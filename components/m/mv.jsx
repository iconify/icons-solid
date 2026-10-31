import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n4jlykykf.css';
import '../../css/u/u_ejovv_x.css';
import '../../css/k/kpz6-gbyv.css';
import '../../css/i/im_qzc9uk.css';

const viewBox = {"width":301,"height":201};
const content = `<g class="ft5dv1b6b"><path class="n4jlykykf"/><path class="u_ejovv_x"/><circle class="kpz6-gbyv"/><circle class="im_qzc9uk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:mv"} {...others} />);
}

export default Component;
