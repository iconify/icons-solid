import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/pk11pab5e.css';
import '../../css/k/kye7fgb5m.css';
import '../../css/o/oxol8u2xx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="pk11pab5e"/><path class="kye7fgb5m wm-a"/><path class="oxol8u2xx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:dices"} {...others} />);
}

export default Component;
