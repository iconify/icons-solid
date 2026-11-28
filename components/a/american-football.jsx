import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/wlfaptbhx.css';
import '../../css/p/poiq3abbu.css';
import '../../css/k/klqvwkbdg.css';
import '../../css/j/j6enqrbkz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="wlfaptbhx"/><path class="poiq3abbu"/><path class="klqvwkbdg"/><path class="j6enqrbkz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:american-football"} {...others} />);
}

export default Component;
