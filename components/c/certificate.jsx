import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/c/clwivwvku.css';
import '../../css/w/w09xprbay.css';
import '../../css/w/wtll6dz5m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="clwivwvku"/><path class="w09xprbay wm-a"/><path class="wm-a wtll6dz5m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:certificate"} {...others} />);
}

export default Component;
