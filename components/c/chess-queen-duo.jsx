import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r029m-boa.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/a12an581p.css';
import '../../css/k/kbxpyqdun.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r029m-boa secondary"/><g class="dt0cm9dhy primary"><path class="a12an581p"/><path class="kbxpyqdun"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:chess-queen-duo"} {...others} />);
}

export default Component;
