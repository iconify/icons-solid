import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v7-s45wqk.css';
import '../../css/v/vohrg0uxt.css';
import '../../css/s/s2x337bqx.css';
import '../../css/w/wuz6-icel.css';
import '../../css/i/i52sr-dmc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="v7-s45wqk"/><path class="vohrg0uxt"/><path class="s2x337bqx"/><path class="wuz6-icel"/><path class="i52sr-dmc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:clapperboard-play-bold-duotone"} {...others} />);
}

export default Component;
