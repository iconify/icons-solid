import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/e04hhlbss.css';
import '../../css/d/dqfo01btt.css';
import '../../css/q/q_oe4kopd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="e04hhlbss"/><path class="dqfo01btt"/><path class="q_oe4kopd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:circles-check"} {...others} />);
}

export default Component;
