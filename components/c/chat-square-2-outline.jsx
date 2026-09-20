import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qq3jwzbiv.css';
import '../../css/l/l_rtxu4wa.css';
import '../../css/i/ia1mkhbft.css';
import '../../css/u/u5bqo67kp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="qq3jwzbiv"/><path class="l_rtxu4wa"/><path class="ia1mkhbft"/><path clip-rule="evenodd" class="u5bqo67kp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chat-square-2-outline"} {...others} />);
}

export default Component;
