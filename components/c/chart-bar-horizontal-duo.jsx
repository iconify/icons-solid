import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/szislnbgb.css';
import '../../css/s/skn8acc-z.css';
import '../../css/s/sjsppzltu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="szislnbgb"/><path class="skn8acc-z wm-a"/><path class="sjsppzltu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:chart-bar-horizontal-duo"} {...others} />);
}

export default Component;
