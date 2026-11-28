import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ezv1mcchc.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/ammxg4bjk.css';
import '../../css/u/u_b68ubpu.css';
import '../../css/s/sbwgwr0cg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ezv1mcchc secondary"/><g class="dt0cm9dhy primary"><path class="ammxg4bjk"/><path class="u_b68ubpu"/><path class="sbwgwr0cg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:ratio-duo"} {...others} />);
}

export default Component;
