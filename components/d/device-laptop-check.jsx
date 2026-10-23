import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pd-q9i0oi.css';
import '../../css/i/ix4zi_etp.css';
import '../../css/l/l4vfhkbco.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="pd-q9i0oi"/><path class="ix4zi_etp"/><path class="l4vfhkbco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:device-laptop-check"} {...others} />);
}

export default Component;
