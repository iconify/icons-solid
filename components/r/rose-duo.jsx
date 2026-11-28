import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fxkdyqb9v.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/mizpbdj-v.css';
import '../../css/g/ga4x5wbsg.css';
import '../../css/j/jf8eaab6s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fxkdyqb9v secondary"/><g class="dt0cm9dhy primary"><path class="mizpbdj-v"/><path class="ga4x5wbsg"/><path class="jf8eaab6s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:rose-duo"} {...others} />);
}

export default Component;
