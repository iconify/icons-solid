import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/wfb39hufs.css';
import '../../css/n/n__wmhw9a.css';
import '../../css/k/k6dkddbtm.css';
import '../../css/e/ea8z-ybmv.css';
import '../../css/i/ievz6-bgp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="wfb39hufs"/><path class="n__wmhw9a wm-s"/><path class="k6dkddbtm wm-s"/><path class="ea8z-ybmv"/><path class="ievz6-bgp wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:holi-splash-duo"} {...others} />);
}

export default Component;
