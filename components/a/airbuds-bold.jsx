import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kc8g53b6d.css';
import '../../css/v/vjyrizbpz.css';
import '../../css/i/i7veoobmy.css';
import '../../css/r/rsm-rlbvm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="kc8g53b6d"/><path class="vjyrizbpz"/><path clip-rule="evenodd" class="i7veoobmy"/><path clip-rule="evenodd" class="rsm-rlbvm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:airbuds-bold"} {...others} />);
}

export default Component;
