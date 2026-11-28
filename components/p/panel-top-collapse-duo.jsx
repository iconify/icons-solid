import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w2gg1trdk.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/oqqr_m9av.css';
import '../../css/e/e_w5g2boj.css';
import '../../css/f/fegmimxbg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary w2gg1trdk"/><g class="dt0cm9dhy primary"><path class="oqqr_m9av"/><path class="e_w5g2boj"/><path class="fegmimxbg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:panel-top-collapse-duo"} {...others} />);
}

export default Component;
