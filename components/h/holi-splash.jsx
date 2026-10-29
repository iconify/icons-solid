import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/ea8z-ybmv.css';
import '../../css/i/ievz6-bgp.css';
import '../../css/k/k6dkddbtm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="ea8z-ybmv"/><path class="ievz6-bgp wm-a"/><path class="k6dkddbtm wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:holi-splash"} {...others} />);
}

export default Component;
