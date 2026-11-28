import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vkt4evw8n.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/ud95brdct.css';
import '../../css/l/lhi-d6nau.css';
import '../../css/s/sd-bzfbly.css';
import '../../css/e/emidn4bkk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary vkt4evw8n"/><g class="dt0cm9dhy primary"><path class="ud95brdct"/><path class="lhi-d6nau"/><path class="sd-bzfbly"/><path class="emidn4bkk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:chart-donut-duo"} {...others} />);
}

export default Component;
