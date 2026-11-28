import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j3ugfqabr.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/ou8cchb0s.css';
import '../../css/d/dmryjzbis.css';
import '../../css/r/ru6l5yb_d.css';
import '../../css/u/u86mb3bdm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j3ugfqabr secondary"/><g class="dt0cm9dhy primary"><path class="ou8cchb0s"/><path class="dmryjzbis"/><path class="ru6l5yb_d"/><path class="u86mb3bdm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:input-text-cursor-duo"} {...others} />);
}

export default Component;
