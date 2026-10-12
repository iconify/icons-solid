import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eyb4rmswu.css';
import '../../css/c/c0k_pbceb.css';
import '../../css/q/q1m3-497e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect transform="matrix(-1 0 0 1 20.7 8.56)" class="eyb4rmswu"/><rect transform="matrix(-1 0 0 1 20.7 8.56)" class="c0k_pbceb"/><path class="q1m3-497e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:text-centerline-right"} {...others} />);
}

export default Component;
