import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/p/pldw6rwea.css';
import '../../css/t/t0ir-1d4u.css';
import '../../css/x/xkzwg9lbd.css';
import '../../css/h/ht4udxt6z.css';
import '../../css/x/xzeab9b2p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="pldw6rwea wm-shadow"/><path class="t0ir-1d4u wm-shadow"/><path class="xkzwg9lbd"/><path class="ht4udxt6z"/><path class="wm-s xzeab9b2p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:smartphone-charging"} {...others} />);
}

export default Component;
