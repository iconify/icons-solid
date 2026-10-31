import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/y/yh6yhbtpg.css';
import '../../css/y/y7kilgu_s.css';
import '../../css/n/njcv8p2vz.css';
import '../../css/m/m4rcic0mu.css';
import '../../css/k/k0s99xuhh.css';
import '../../css/e/e-k16bc4z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow yh6yhbtpg"/><path class="y7kilgu_s"/><path class="njcv8p2vz"/><path class="m4rcic0mu"/><path class="k0s99xuhh"/><path class="e-k16bc4z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:thermometer-snowflake"} {...others} />);
}

export default Component;
