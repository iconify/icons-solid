import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/nn7npcb6i.css';
import '../../css/i/i1za66bhv.css';
import '../../css/e/e8mk_9b-m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="nn7npcb6i"/><path class="i1za66bhv"/><path class="e8mk_9b-m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:arrow-u-turn-left-line-flip"} {...others} />);
}

export default Component;
