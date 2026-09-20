import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q6oxflbgu.css';
import '../../css/x/xg0kfbcnh.css';
import '../../css/e/eaotdibie.css';
import '../../css/f/f4d5x_t8i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="q6oxflbgu"/><path class="xg0kfbcnh"/><path clip-rule="evenodd" class="eaotdibie"/><path class="f4d5x_t8i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:clapperboard-play-bold"} {...others} />);
}

export default Component;
