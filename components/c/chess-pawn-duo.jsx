import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hvyyz5b8g.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/q4o4ithkw.css';
import '../../css/k/kbxpyqdun.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hvyyz5b8g secondary"/><g class="dt0cm9dhy primary"><path class="q4o4ithkw"/><path class="kbxpyqdun"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:chess-pawn-duo"} {...others} />);
}

export default Component;
