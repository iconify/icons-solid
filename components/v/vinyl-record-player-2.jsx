import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/byqctddic.css';
import '../../css/q/q_a3xr8cd.css';
import '../../css/c/c2j93zwmk.css';
import '../../css/i/ikbjqqzcc.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="byqctddic"/><path class="q_a3xr8cd"/><path class="c2j93zwmk"/><path class="ikbjqqzcc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:vinyl-record-player-2"} {...others} />);
}

export default Component;
