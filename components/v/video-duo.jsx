import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hij-t_s7i.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/t7hlcbb-q.css';
import '../../css/a/a_sewubtv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hij-t_s7i secondary"/><g class="dt0cm9dhy primary"><path class="t7hlcbb-q"/><path class="a_sewubtv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:video-duo"} {...others} />);
}

export default Component;
