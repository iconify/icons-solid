import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iyxlttl6b.css';
import '../../css/j/jik13iwkx.css';
import '../../css/w/whtp5ljmh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="iyxlttl6b"/><path class="jik13iwkx"/><path class="whtp5ljmh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:feather-duotone"} {...others} />);
}

export default Component;
