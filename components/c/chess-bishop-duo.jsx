import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zi_5gbxpy.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/i01j-sbop.css';
import '../../css/k/kbxpyqdun.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary zi_5gbxpy"/><g class="dt0cm9dhy primary"><path class="i01j-sbop"/><path class="kbxpyqdun"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:chess-bishop-duo"} {...others} />);
}

export default Component;
