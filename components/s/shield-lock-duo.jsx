import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tcfk99r7p.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/j2vbli9go.css';
import '../../css/b/b08rucc_a.css';
import '../../css/p/p2yzh8egz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary tcfk99r7p"/><g class="dt0cm9dhy primary"><path class="j2vbli9go"/><path class="b08rucc_a"/><path class="p2yzh8egz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:shield-lock-duo"} {...others} />);
}

export default Component;
