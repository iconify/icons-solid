import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g-3e_mocl.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/un1cj3b-n.css';
import '../../css/p/pgtdp5mhj.css';
import '../../css/y/y4vesqbkl.css';
import '../../css/k/kl744mb7q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g-3e_mocl secondary"/><g class="dt0cm9dhy primary"><path class="un1cj3b-n"/><path class="pgtdp5mhj"/><path class="y4vesqbkl"/><path class="kl744mb7q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:toolbox-duo"} {...others} />);
}

export default Component;
