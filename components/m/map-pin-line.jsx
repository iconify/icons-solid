import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nucyx_b7q.css';
import '../../css/h/h_lb_vbus.css';
import '../../css/f/fhq_18j2k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="nucyx_b7q"/><circle transform="rotate(90 12 6.87)" class="h_lb_vbus"/><circle transform="rotate(90 12 6.87)" class="fhq_18j2k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:map-pin-line"} {...others} />);
}

export default Component;
