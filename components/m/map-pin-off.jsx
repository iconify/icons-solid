import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/u/u3e833beo.css';
import '../../css/k/k3xvwwbhz.css';
import '../../css/y/yaf0hz8jh.css';
import '../../css/x/xgn8g_bte.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="u3e833beo wm-k"/><path class="k3xvwwbhz"/><path class="yaf0hz8jh"/><path class="wm-s xgn8g_bte"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:map-pin-off"} {...others} />);
}

export default Component;
