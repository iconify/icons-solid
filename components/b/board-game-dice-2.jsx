import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/rysj573jr.css';
import '../../css/u/uo3hpob_z.css';
import '../../css/i/i7a87lrkp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="rysj573jr"/><path class="uo3hpob_z"/><path class="i7a87lrkp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:board-game-dice-2"} {...others} />);
}

export default Component;
