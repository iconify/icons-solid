import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ei_7nv09x.css';
import '../../css/l/lnn3741be.css';
import '../../css/i/irz_dnbrr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ei_7nv09x"/><rect transform="rotate(15 -6.92 89.84)scale(-1 1)" class="lnn3741be"/><path class="irz_dnbrr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:swipe"} {...others} />);
}

export default Component;
