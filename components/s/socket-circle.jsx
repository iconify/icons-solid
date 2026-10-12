import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o5iik4d7c.css';
import '../../css/l/lpjwmjbdt.css';
import '../../css/e/ec3q2exum.css';
import '../../css/h/h27vhbcct.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="o5iik4d7c"/><circle transform="rotate(90 12 12)" class="lpjwmjbdt"/><path class="ec3q2exum"/><circle transform="rotate(90 12 12)" class="h27vhbcct"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:socket-circle"} {...others} />);
}

export default Component;
